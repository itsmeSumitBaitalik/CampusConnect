import express from 'express';
import {
  user_login,user_signup, user_logout,forget_user_pass
}  from '../../controllers/authentication/user.controllers.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.send('User base route is working');
});

router.post('/login', user_login);
router.post('/signup', user_signup);
router.post('/logout', user_logout);
router.post('/forgetpassword', forget_user_pass);

export const UserRoute = router;
export default UserRoute;