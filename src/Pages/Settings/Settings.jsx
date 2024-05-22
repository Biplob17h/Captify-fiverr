/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { FaHistory, FaChartLine, FaCookieBite } from "react-icons/fa";

const Settings = ({ show }) => {
  const [theme, setTheme] = useState("Dark");
  const [fontSize, setFontSize] = useState("Normal");
  const [notificationPreference, setNotificationPreference] = useState("Email");
  const [privacySettings, setPrivacySettings] = useState({
    enableHistory: true,
    enableAnalytics: false,
    enableCookies: true,
  });

  const handlePrivacySettingChange = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting],
    });
  };

  const handleThemeToggle = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit settings data
    console.log("Settings submitted:", {
      theme,
      fontSize,
      notificationPreference,
      privacySettings,
    });
  };

  return (
    <div
      className={`bg-black min-h-screen p-10 text-white text-[16px] border mx-5 md:mx-60 rounded border-[#a100ff] ${
        show === "setting" ? "" : "hidden"
      }`}
    >
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Theme Selection</label>
            <div className="flex items-center">
              <button
                className="mr-2 p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-700"
                onClick={handleThemeToggle}
              >
                {theme === "Dark" ? <BsSun /> : <BsMoon />}
              </button>
              <span className="text-lg">{theme}</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Font Size</label>
            <div className="flex">
              <button
                className={`mr-2 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700 ${fontSize === "Small" ? "bg-[#a100ff] hover:bg-[#a100ff]" : ""}`}
                onClick={() => setFontSize("Small")}
              >
                Small
              </button>
              <button
                className={`mr-2 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700 ${fontSize === "Normal" ? "bg-[#a100ff] hover:bg-[#a100ff]" : ""}`}
                onClick={() => setFontSize("Normal")}
              >
                Normal
              </button>
              <button
                className={`mr-2 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700 ${fontSize === "Large" ? "bg-[#a100ff] hover:bg-[#a100ff]" : ""}`}
                onClick={() => setFontSize("Large")}
              >
                Large
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Push Notification Preferences</label>
            <div className="flex items-center">
              <RiNotificationLine className="mr-2" />
              <select
                value={notificationPreference}
                onChange={(e) => setNotificationPreference(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#a100ff]"
              >
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="Push">Push</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Privacy Settings</label>
            <div className="flex items-center mb-2">
              <FaHistory className="mr-2" />
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  privacySettings.enableHistory
                    ? "bg-[#a100ff] text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => handlePrivacySettingChange("enableHistory")}
              >
                Enable History
              </button>
            </div>
            <div className="flex items-center mb-2">
              <FaChartLine className="mr-2" />
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  privacySettings.enableAnalytics
                    ? "bg-[#a100ff] text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => handlePrivacySettingChange("enableAnalytics")}
              >
                Enable Analytics
              </button>
            </div>
            <div className="flex items-center mb-2">
              <FaCookieBite className="mr-2" />
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  privacySettings.enableCookies
                    ? "bg-[#a100ff] text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => handlePrivacySettingChange("enableCookies")}
              >
                Enable Cookies
              </button>
            </div>
          </div>
          <button type="submit" className="customBtn1 mt-5 w-full">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
