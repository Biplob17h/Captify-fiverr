/* eslint-disable react/prop-types */
import { FaUpload } from "react-icons/fa";

const TranscriptionHistory = ({ show, setShow }) => {
  const transcriptions = [
    {
      id: 1,
      title: "Meeting Transcript",
      uploadDate: "2024-05-10",
      status: "Completed",
      user: "John Doe",
      minutes: 60,
      paidAmount: "$50",
      successRate: "95%",
    },
    {
      id: 2,
      title: "Interview with CEO",
      uploadDate: "2024-05-12",
      status: "In Progress",
      user: "Jane Smith",
      minutes: 45,
      paidAmount: "$40",
      successRate: "80%",
    },
    {
      id: 3,
      title: "Client Call",
      uploadDate: "2024-05-15",
      status: "Pending",
      user: "Alex Johnson",
      minutes: 30,
      paidAmount: "$30",
      successRate: "Pending",
    },
  ];

  const handleUploadAudio = () => {
    setShow("audio");
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 text-[16px] ${
        show === "TranscriptionHistory" ? "" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#460073] p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Transcription History</h1>
        <button
          className="customBtn1 flex items-center ml-auto"
          onClick={handleUploadAudio}
        >
          <FaUpload className="mr-2" /> Upload Audio
        </button>
      </div>

      {/* Transcription Table */}
      <div className="mt-6">
        <div className="hidden lg:block">
          <table className="min-w-full bg-gray-800 rounded-md shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Minutes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Paid Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Success Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-600">
              {transcriptions.map((transcription) => (
                <tr key={transcription.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.minutes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.paidAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transcription.successRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transcription.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : transcription.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {transcription.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden">
          {transcriptions.map((transcription) => (
            <div
              key={transcription.id}
              className="bg-gray-800 p-4 rounded-md shadow-md mb-4"
            >
              <h2 className="text-xl font-semibold mb-2">
                {transcription.title}
              </h2>
              <p className="text-gray-400 mb-2">User: {transcription.user}</p>
              <p className="text-gray-400 mb-2">
                Upload Date: {transcription.uploadDate}
              </p>
              <p className="text-gray-400 mb-2">
                Minutes: {transcription.minutes}
              </p>
              <p className="text-gray-400 mb-2">
                Paid Amount: {transcription.paidAmount}
              </p>
              <p className="text-gray-400 mb-2">
                Success Rate: {transcription.successRate}
              </p>
              <p className="mb-2">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transcription.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : transcription.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {transcription.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranscriptionHistory;
