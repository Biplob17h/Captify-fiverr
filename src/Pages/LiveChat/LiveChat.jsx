/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = ({ show, setShow }) => {
  return (
    <div
      className={`flex flex-col h-screen bg-gray-900 text-white text-[16px] ${
        show === "liveChat" ? "" : "hidden"
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#460073] shadow-md">
        <h1 className="text-xl font-semibold">Live Chat</h1>
        <button
          className="text-sm bg-red-600 px-2 py-1 rounded-md hover:bg-red-700"
          aria-label="End Chat"
          onClick={() => {
            setShow("liveChatList");
          }}
        >
          End Chat
        </button>
      </header>

      {/* Chat Body */}
      <main className="flex flex-col flex-grow p-4 overflow-y-auto space-y-4">
        {/* Messages */}
        <div className="flex items-end space-x-2 self-end">
          <div className="text-xs text-gray-500">Today at 2:30 PM</div>
          <div className="bg-gray-800 p-3 rounded-md max-w-xs">
            <p className="text-sm">Hello! How can I assist you today?</p>
          </div>
        </div>

        <div className="flex items-end space-x-2 self-start">
          <div className="bg-[#460073] p-3 rounded-md max-w-xs">
            <p className="text-sm">I need help with my subscription.</p>
          </div>
          <div className="text-xs text-gray-500">Today at 2:31 PM</div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="flex items-center p-4 bg-gray-800">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#460073]"
          aria-label="Type a message"
        />
        <button
          className="ml-2 p-2 bg-[#460073] rounded-full hover:bg-[#36005a]"
          aria-label="Send"
        >
          <AiOutlineSend className="text-xl" />
        </button>
      </footer>
    </div>
  );
};

export default LiveChat;
