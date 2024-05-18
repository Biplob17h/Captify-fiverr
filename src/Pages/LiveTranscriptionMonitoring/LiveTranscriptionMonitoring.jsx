/* eslint-disable react/prop-types */
import { FaPause, FaPlay, FaStop, FaCog } from "react-icons/fa";

const LiveTranscriptionMonitoring = ({ show }) => {
  const liveSessions = [
    {
      id: 1,
      title: "Team Meeting",
      startTime: "2024-05-16T09:00:00Z",
      status: "In Progress",
      participants: ["Alice", "Bob", "Charlie"],
    },
    {
      id: 2,
      title: "Client Call",
      startTime: "2024-05-16T10:00:00Z",
      status: "In Progress",
      participants: ["Dave", "Eve", "Frank"],
    },
    {
      id: 3,
      title: "Product Demo",
      startTime: "2024-05-16T11:00:00Z",
      status: "Pending",
      participants: ["Grace", "Heidi"],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 text-[16px] ${
        show === "LiveTranscription" ? "" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Live Transcription Monitoring</h1>
      </div>

      {/* Live Sessions List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveSessions.map((session) => (
          <div
            key={session.id}
            className="bg-gray-800 p-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{session.title}</h2>
            <p className="text-gray-400 mb-2">
              Start Time: {new Date(session.startTime).toLocaleString()}
            </p>
            <p
              className={`mb-2 ${
                session.status === "In Progress"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              Status: {session.status}
            </p>
            <div className="mb-2">
              <h3 className="font-semibold">Participants:</h3>
              <ul className="list-disc list-inside">
                {session.participants.map((participant, index) => (
                  <li key={index} className="text-gray-300">
                    {participant}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">
                  <FaPlay />
                </button>
                <button className="bg-yellow-600 p-2 rounded-md hover:bg-yellow-700">
                  <FaPause />
                </button>
                <button className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                  <FaStop />
                </button>
              </div>
              <button className="bg-gray-600 p-2 rounded-md hover:bg-gray-700">
                <FaCog />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTranscriptionMonitoring;
