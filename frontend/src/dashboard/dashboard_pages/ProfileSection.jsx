import { useState } from "react";
import { X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const ProfileSection = ({ onClose, onApply, initialProfile }) => {
  // Local state for profile fields
  const [profile, setProfile] = useState(initialProfile || {
    name: "John Doe",
    age: 20,
    university: "Oxford University",
    email: "john@oxford.edu",
    semester: "3rd Year / 5th Semester",
  });

  const [muteNotifications, setMuteNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const handleApply = () => {
    onApply({ ...profile, muteNotifications, darkMode, twoFactor });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[90%] md:w-[700px] p-6 overflow-y-auto max-h-[90vh] text-gray-900 dark:text-gray-100 no-scrollbar">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-bold">Profile & Settings</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-inner">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaUserCircle className="text-indigo-600 dark:text-indigo-400" size={22} />
            User Profile
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Age</label>
              <input
                type="text"
                value={profile.age}
                disabled
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">University Name</label>
              <input
                type="text"
                value={profile.university}
                onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="text-sm font-medium">University Email</label>
              <input
                type="text"
                value={profile.email}
                disabled
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Current Year / Semester</label>
              <input
                type="text"
                value={profile.semester}
                onChange={(e) => setProfile({ ...profile, semester: e.target.value })}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>

            <div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md">
                Change Avatar
              </button>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-inner">
          <h3 className="text-lg font-semibold mb-3">Settings</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Mute Notifications</span>
              <input
                type="checkbox"
                checked={muteNotifications}
                onChange={() => setMuteNotifications(!muteNotifications)}
                className="w-5 h-5 accent-indigo-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Dark Mode</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5 accent-indigo-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Two-factor Authentication</span>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
                className="w-5 h-5 accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
