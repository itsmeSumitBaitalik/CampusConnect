import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {sendOtpEmail} from '../../lib/email_generator.js';
import { User } from '../../db/models/user.model.js';

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// ================== SIGNUP ==================
export const user_signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser._id);
    res.status(201).json({ 
      token, 
      user: { id: newUser._id, username, email } 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ================== LOGIN ==================
export const user_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);
    res.status(200).json({ 
      token, 
      user: { id: user._id, username: user.username, email: user.email } 
    });
    
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ================== LOGOUT ==================
export const user_logout = (req, res) => {
  // With JWT, logout is handled client-side by deleting the token
  // But we can still return a message from the server
  res.status(200).json({ message: 'Logged out successfully' });
};

// ================== FORGET PASSWORD ==================

export const forget_user_pass = async (req, res) => {
  const { email } = req.body;
  try {
    
    await sendOtpEmail(email);
    // Logic to handle password reset (e.g., send email with reset link)
    return res.status(200).json({ 
            success: true, 
            message: `Your otp has successfully send to this Email ${email}!`
    });  
    
  
  } catch (error) {
    return res.status(500).json({ 
            success: false, 
            message: "Failed to send OTP email!", 
            error: error.message 
    });  
  }
};

