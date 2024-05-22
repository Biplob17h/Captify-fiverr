/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  FaUpload,
  FaEdit,
  FaTrash,
  FaFileAlt,
  FaTimes,
  FaRegFileAudio,
} from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";

const TranscriptionManagement = ({ show, setShow }) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transcriptions = [
    {
      id: 1,
      title: "Meeting Transcript",
      uploadDate: "2024-05-10",
      status: "Completed",
      file: "meeting_transcript.pdf",
      user: "John Doe",
      minutes: 30,
      amountSpent: "$15",
      successRate: "95%",
    },
    {
      id: 2,
      title: "Interview with CEO",
      uploadDate: "2024-05-12",
      status: "In Progress",
      file: null,
      user: "Jane Smith",
      minutes: 45,
      amountSpent: "$22.5",
      successRate: "90%",
    },
    {
      id: 3,
      title: "Client Call",
      uploadDate: "2024-05-15",
      status: "Pending",
      file: null,
      user: "Alex Johnson",
      minutes: 20,
      amountSpent: "$10",
      successRate: "85%",
    },
  ];

  const filteredTranscriptions = transcriptions.filter((transcription) => {
    if (statusFilter !== "all" && transcription.status !== statusFilter) {
      return false;
    }
    if (userFilter && transcription.user !== userFilter) {
      return false;
    }
    return true;
  });

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 ${
        show === "Transcription" ? "" : "hidden"
      } text-[16px]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-col md:flex-row bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Transcription Management</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="customBtn1 flex items-center mt-7 md:mt-0 w-full"
          >
            <FaUpload className="mr-2" /> Resync AI
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="md:flex justify-between mt-6">
        <div className="flex items-center space-x-2">
          <label htmlFor="statusFilter" className="text-gray-400">
            Filter by Status:
          </label>
          <select
            id="statusFilter"
            className="bg-gray-800 text-white p-2 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 mt-5 md:mt-0">
          <label htmlFor="userFilter" className="text-gray-400">
            Filter by User:
          </label>
          <input
            type="text"
            id="userFilter"
            className="bg-gray-800 text-white p-2 rounded-md"
            placeholder="Enter username"
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Transcriptions List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTranscriptions.map((transcription) => (
          <div
            key={transcription.id}
            className="bg-gray-800 p-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">
              {transcription.title}
            </h2>
            <p className="text-gray-400 mb-2">
              Uploaded on: {transcription.uploadDate}
            </p>
            <p
              className={`mb-2 ${
                transcription.status === "Completed"
                  ? "text-green-500"
                  : transcription.status === "In Progress"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Status: {transcription.status}
            </p>
            <p className="text-gray-400">User: {transcription.user}</p>
            <p className="text-gray-400">Minutes: {transcription.minutes}</p>
            <p className="text-gray-400">
              Amount Spent: {transcription.amountSpent}
            </p>
            <p className="text-gray-400">
              Success Rate: {transcription.successRate}
            </p>
            <div className="flex justify-between items-center">
              {transcription.file ? (
                <a
                  href={`/transcriptions/${transcription.file}`}
                  className="text-blue-500 hover:underline"
                >
                  View File
                </a>
              ) : (
                <p className="text-gray-400">No file available</p>
              )}
              <div className="flex space-x-2">
                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">
                  <FaEdit />
                </button>
                <button className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-0">
          <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-md w-full relative ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center">
                <FaFileAlt className="mr-2" /> Upload Files
              </h2>
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="flex cursor-pointer">
              <div className="mb-4   h-full cursor-pointer">
                <div className="bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center  md:w-[200px] cursor-pointer">
                  <input
                    type="file"
                    accept="audio/*"
                    className="hidden cursor-pointer"
                    id="audio-upload"
                  />
                  <label
                    htmlFor="audio-upload"
                    className="w-full h-full text-center flex flex-col justify-center items-center cursor-pointer"
                  >
                    <span>Upload Audio File</span> <FaRegFileAudio size={40} className="cursor-pointer"/>
                  </label>
                </div>
              </div>
              <div className="mb-4 cursor-pointer">
                <div className="bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center cursor-pointer w-[160px] md:w-[200px] ml-3 ">
                  <input
                    type="file"
                    accept=".txt,.pdf"
                    className="hidden"
                    id="text-upload"
                  />
                  <label
                    htmlFor="audio-upload"
                    className="w-full h-full text-center flex flex-col justify-center items-center cursor-pointer"
                  >
                    <span>Upload Text File</span> <FaFileLines size={40} className="cursor-pointer"/>
                  </label>
                </div>
              </div>
            </div>
            <button className="customBtn1 w-full">Resync</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranscriptionManagement;
