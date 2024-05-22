/* eslint-disable react/prop-types */
import { useState } from "react";

const LiveTranscriptionMonitoring = ({ show, setShow }) => {
  const [transcriptionActive, setTranscriptionActive] = useState(false);

  const handleStopTranscription = () => {
    setTranscriptionActive(!transcriptionActive);
  };

  const handleStartTranscription = () => {
    setTranscriptionActive(true);
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 text-[16px] ${
        show === "LiveTranscription" ? "" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Live Transcription Monitoring</h1>
        {transcriptionActive && (
          <button
            className="ml-auto bg-red-600 p-2 rounded-md hover:bg-red-700"
            onClick={handleStopTranscription}
          >
            Stop Live Transcription
          </button>
        )}
      </div>

      {/* Live Transcript Options */}
      <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-md w-full mt-6 mx-auto">
        <h2 className="text-xl font-bold mb-4">You want Live Transcript for</h2>
        <div className="flex justify-between mb-4">
          <a href="https://captifylive.online/realtimetranscriptions">
            <button
              className="bg-purple-600 p-2 rounded-md hover:bg-purple-700"
              onClick={handleStartTranscription}
            >
              Online Meeting
            </button>
          </a>
          <a href="https://captifylive.online/realtimetranscriptions">
            <button
              className="bg-red-600 p-2 rounded-md hover:bg-red-700"
              onClick={handleStartTranscription}
            >
              Physical Meeting
            </button>
          </a>
          <button
            className="bg-gray-600 p-2 rounded-md hover:bg-gray-700"
            onClick={() => {
              setShow("home");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTranscriptionMonitoring;
