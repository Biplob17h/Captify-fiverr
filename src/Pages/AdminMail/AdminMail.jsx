/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { FaTrash, FaEnvelopeOpen, FaEnvelope } from "react-icons/fa";
import Modal from "react-modal";

// Mock email data
const mockEmails = [
  {
    id: 1,
    subject: "Meeting Reminder",
    sender: "john.doe@example.com",
    date: "2024-05-10",
    content: "Don't forget about the meeting at 3 PM tomorrow.",
    isRead: false,
  },
  {
    id: 2,
    subject: "Project Update",
    sender: "jane.smith@example.com",
    date: "2024-05-12",
    content:
      "Here's the latest update on the project. Let me know your thoughts.",
    isRead: true,
  },
  {
    id: 3,
    subject: "Client Feedback",
    sender: "client@example.com",
    date: "2024-05-15",
    content: "The client has provided feedback on the recent deliverables.",
    isRead: false,
  },
];

// Custom styles for the modal
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1a1a1a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const AdminMail = ({ show }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmail(null);
    setIsModalOpen(false);
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 text-[16px] ${
        show === "mail" ? "" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Admin Mail</h1>
      </div>

      {/* Email List */}
      <div className="mt-6 bg-gray-800 rounded-md shadow-md overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-gray-700 mb-5">
          <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Select All</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-red-600 p-2 rounded-md hover:bg-red-700">
              <FaTrash />
            </button>
          </div>
        </div>
        {mockEmails.map((email) => (
          <div
            key={email.id}
            className="flex items-center justify-between p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
            onClick={() => openModal(email)}
          >
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              {email.isRead ? (
                <FaEnvelopeOpen className="text-green-500" />
              ) : (
                <FaEnvelope className="text-yellow-500" />
              )}
              <div>
                <h2 className="font-semibold">{email.subject}</h2>
                <p className="text-gray-400">{email.sender}</p>
              </div>
            </div>
            <div className="text-gray-400">{email.date}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Email Details"
      >
        {selectedEmail && (
          <div>
            <h2 className="text-xl font-bold mb-2">{selectedEmail.subject}</h2>
            <p className="text-gray-400 mb-4">From: {selectedEmail.sender}</p>
            <p>{selectedEmail.content}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 p-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminMail;
