import React from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ForgetPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-200 p-4">
      <button
        onClick={() => (window.location.href = "/")} // 👈 replace "/" with your landing page route
        className="absolute top-4 left-4 flex items-center gap-1 border-2 border-black rounded-md bg-white shadow-[4px_4px_0px_black] px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 transform hover:scale-105 transition duration-200"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>
      <div className="bg-white rounded-md border-2 border-black max-w-sm w-full shadow-[6px_6px_0px_black]">
        {/* Header */}
        <div className="border-b-2 border-black p-3 text-center">
          <h1 className="text-xl font-bold">Forget Password</h1>
        </div>

        {/* Form Section */}
        <div className="p-6 flex flex-col gap-4">
          {/* Email Input */}
          <div className="flex items-center border-2 border-black rounded-md bg-white shadow-[4px_4px_0px_black]">
            <span className="p-2 border-r-2 border-black">
              <Mail size={20} />
            </span>
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 p-2 outline-none border-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200">
              Submit
            </button>
            <button className="flex-1 bg-red-400 hover:bg-red-500 border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200">
              Cancel
            </button>
          </div>

          {/* Back to Login */}
          <Link to={"/login"} className="flex flex-1 justify-center items-center w-full bg-white hover:bg-gray-100 border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
