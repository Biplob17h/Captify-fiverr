/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { FaUpload, FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TranscriptionManagement = ({show}) => {
  const transcriptions = [
    {
      id: 1,
      title: 'Meeting Transcript',
      uploadDate: '2024-05-10',
      status: 'Completed',
      file: 'meeting_transcript.pdf',
    },
    {
      id: 2,
      title: 'Interview with CEO',
      uploadDate: '2024-05-12',
      status: 'In Progress',
      file: null,
    },
    {
      id: 3,
      title: 'Client Call',
      uploadDate: '2024-05-15',
      status: 'Pending',
      file: null,
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-white p-6 ${show === "Transcription" ? "" : "hidden"} text-[16px]`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Transcription Management</h1>
        <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 flex items-center">
          <FaUpload className="mr-2" /> Upload Transcription
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-between mt-6">
        <div className="flex items-center space-x-2">
          <label htmlFor="statusFilter" className="text-gray-400">Filter by Status:</label>
          <select id="statusFilter" className="bg-gray-800 text-white p-2 rounded-md">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by Title"
          className="bg-gray-800 text-white p-2 rounded-md"
        />
      </div>

      {/* Transcriptions List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transcriptions.map((transcription) => (
          <div key={transcription.id} className="bg-gray-800 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{transcription.title}</h2>
            <p className="text-gray-400 mb-2">Uploaded on: {transcription.uploadDate}</p>
            <p className={`mb-2 ${transcription.status === 'Completed' ? 'text-green-500' : transcription.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
              Status: {transcription.status}
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
    </div>
  );
};

export default TranscriptionManagement;
