import React from "react";
import { User, Mail,ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-yellow-400 relative"
      //   style={{ backgroundColor: "#facc15" }}
    >
      {/* Back Button */}
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
          <h1 className="text-xl font-bold">Signup</h1>
        </div>

        {/* Form */}
        <div className="p-6 flex flex-col gap-4">
          {/* Username */}
          <div className="flex items-center border-2 border-black rounded-md bg-white shadow-[4px_4px_0px_black]">
            <span className="p-2 border-r-2 border-black">
              <User size={20} />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="flex-1 p-2 outline-none border-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-2 border-black rounded-md bg-white shadow-[4px_4px_0px_black]">
            <span className="p-2 border-r-2 border-black">
              <Mail size={20} />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 outline-none border-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link to={"/login"}  className="flex flex-1 justify-center items-center bg-emerald-400 hover:bg-emerald-500 border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200">
              Login
            </Link>
            <Link  to={"/signup"} className="flex flex-1 justify-center items-center bg-yellow-400 hover:bg-yellow-500 border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200">
              Signup
            </Link>
          </div>

          {/* Google Signup */}
          <Link  to={"/api_login"} className="flex flex-1 justify-center items-center w-full border-2 border-black shadow-[4px_4px_0px_black] rounded-md p-2 font-semibold cursor-pointer transform hover:scale-105 transition duration-200 hover:bg-gray-100">
            Signup with Google
          </Link>

        </div>
      </div>
    </div>
  );
}

export default SignupPage;
