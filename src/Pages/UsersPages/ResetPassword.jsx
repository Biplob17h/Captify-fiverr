/* eslint-disable react/prop-types */

import { useState } from "react";

const ResetPassword = ({ show }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      // Send password reset request
      console.log("Password reset request sent");
      // Reset form fields
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } else {
      setErrorMessage("Passwords do not match");
    }
  };
  return (
    <div
      className={`${
        show === "password" ? "" : "hidden"
      } bg-black min-h-screen text-white text-[16px] `}
    >
      <div className="bg-black min-h-screen p-10 text-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:border-[#a100ff]"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:border-[#a100ff]"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <div>
            <button
              className="customBtn1 w-full"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
