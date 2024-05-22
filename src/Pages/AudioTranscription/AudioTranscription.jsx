/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaCloudUploadAlt, FaTransgender } from "react-icons/fa";

const AudioTranscription = ({ show, setShow }) => {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("English");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form
    console.log("File:", file);
    console.log("Language:", language);
  };
  return (
    <div className={`${show === "audio" ? "" : "hidden"} text-[16px]`}>
      <div className="min-h-screen bg-black flex items-center justify-center p-4 md:-mt-[50px]">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[550px] h-[550px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FaCloudUploadAlt /> Transcribe Files
            </h2>
            <button
              onClick={() => {
                setShow("TranscriptionHistory");
              }}
              className="text-gray-400 hover:text-white"
            >
              &#x2715;
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[280px]">
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <FaCloudUploadAlt size={40} className="text-blue-500 mb-2" />
                  <span className="text-gray-400">Upload Audio File</span>
                </div>
              </label>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              {file && <p className="mt-2">{file.name}</p>}
            </div>
            <div>
              <label htmlFor="language" className="block mb-2">
                Audio Language
              </label>
              <select
                id="language"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                {/* Add more languages as needed */}
              </select>
            </div>
            <button
              type="submit"
              className="w-full customBtn1 flex justify-center items-center"
            >
              <FaCloudUploadAlt size={25} className="mr-3" /> Transcribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AudioTranscription;
