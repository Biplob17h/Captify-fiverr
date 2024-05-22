/* eslint-disable react/prop-types */
import { FaPlus, FaFilter, FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const Tickets = ({ show }) => {
  const tickets = [
    {
      id: 1,
      title: "Server Down",
      description: "The main server is down and needs to be restarted.",
      status: "Open",
      priority: "High",
    },
    {
      id: 2,
      title: "Login Issue",
      description: "Users are unable to log in to their accounts.",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Bug in Payment Gateway",
      description: "Payment gateway is throwing an error on checkout.",
      status: "Closed",
      priority: "Low",
    },
  ];
  return (
    <div className={`${show === "tickets" ? "" : "hidden"} text-[16px]`}>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Header */}
        <div className=" bg-[#460073] p-4 rounded-md shadow-md flex md:flex-row flex-col  items-center justify-between ">
          <h1 className="text-2xl font-bold">Ticket Management</h1>
          <button className="customBtn1 flex items-center mt-7 md:mt-0">
            <FaPlus className="mr-2" /> Create Ticket
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between mt-6">
          <div className="flex items-center space-x-4">
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 flex items-center">
              <FaFilter className="mr-2" /> Filter
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              All
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Open
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              In Progress
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Closed
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search tickets..."
              className="bg-gray-800 px-4 py-2 rounded-md w-72"
            />
          </div>
        </div>

        {/* Tickets List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gray-800 p-4 rounded-md shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{ticket.title}</h2>
              <p className="text-gray-400 mb-4">{ticket.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-2 py-1 rounded ${
                    ticket.status === "Open"
                      ? "bg-red-600"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-600"
                      : "bg-green-600"
                  }`}
                >
                  {ticket.status}
                </span>
                <span
                  className={`px-2 py-1 rounded ${
                    ticket.priority === "High"
                      ? "bg-red-600"
                      : ticket.priority === "Medium"
                      ? "bg-yellow-600"
                      : "bg-green-600"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">
                  <FaEdit />
                </button>
                <button className="bg-green-600 p-2 rounded-md hover:bg-green-700">
                  <FaCheck />
                </button>
                <button className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
