/* eslint-disable react/prop-types */

import { FaHeartbeat, FaRegClock, FaServer } from "react-icons/fa";
import { FiActivity, FiTool } from "react-icons/fi";

const SystemHealth = ({ show }) => {
  return (
    <div className={`${show === "system" ? "" : "hidden"} text-[16px]`}>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Header */}
        <div className=" bg-[#460073] p-4 rounded-md shadow-md  md:flex md:items-center md:justify-between">
          <h1 className="text-xl md:text-2xl font-bold">System Health and Reporting</h1>
          <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 mt-6 md:mt-0">
            Run Diagnostics
          </button>
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Metrics */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <FaServer className="text-3xl text-[#460073] mr-3" />
              <h2 className="text-xl font-semibold">Performance Metrics</h2>
            </div>
            <p className="text-sm text-gray-400">
              Monitor CPU, Memory, and Network Usage
            </p>
            <div className="mt-4">
              <div className="mb-2">
                <span className="font-medium">CPU Usage:</span>
                <div className="w-full bg-gray-600 rounded-full h-4 mt-1">
                  <div
                    className="bg-[#460073] h-4 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">65%</span>
              </div>
              <div className="mb-2">
                <span className="font-medium">Memory Usage:</span>
                <div className="w-full bg-gray-600 rounded-full h-4 mt-1">
                  <div
                    className="bg-[#460073] h-4 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">45%</span>
              </div>
              <div className="mb-2">
                <span className="font-medium">Network Usage:</span>
                <div className="w-full bg-gray-600 rounded-full h-4 mt-1">
                  <div
                    className="bg-[#460073] h-4 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">80%</span>
              </div>
            </div>
          </div>

          {/* Service Uptime */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <FaRegClock className="text-3xl text-[#460073] mr-3" />
              <h2 className="text-xl font-semibold">Service Uptime</h2>
            </div>
            <p className="text-sm text-gray-400">
              Monitor the uptime of critical services
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Service A</span>
                <span className="text-green-400">99.99%</span>
              </div>
              <div className="flex justify-between">
                <span>Service B</span>
                <span className="text-green-400">99.95%</span>
              </div>
              <div className="flex justify-between">
                <span>Service C</span>
                <span className="text-yellow-400">98.70%</span>
              </div>
            </div>
          </div>

          {/* Problem Areas */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-3xl text-[#460073] mr-3" />
              <h2 className="text-xl font-semibold">Problem Areas</h2>
            </div>
            <p className="text-sm text-gray-400">
              Identify and manage system issues
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span>High CPU Usage</span>
                <span className="text-red-400">Critical</span>
              </li>
              <li className="flex justify-between">
                <span>Memory Leak</span>
                <span className="text-yellow-400">Warning</span>
              </li>
              <li className="flex justify-between">
                <span>Network Latency</span>
                <span className="text-yellow-400">Warning</span>
              </li>
            </ul>
          </div>

          {/* System Diagnostics */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <FiTool className="text-3xl text-[#460073] mr-3" />
              <h2 className="text-xl font-semibold">System Diagnostics</h2>
            </div>
            <p className="text-sm text-gray-400">
              Run system diagnostics and checks
            </p>
            <button className="w-full mt-4 bg-[#460073] py-2 rounded-md hover:bg-[#36005a] transition-colors">
              Run Diagnostics
            </button>
          </div>

          {/* Automated Recovery */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <FiActivity className="text-3xl text-[#460073] mr-3" />
              <h2 className="text-xl font-semibold">Automated Recovery</h2>
            </div>
            <p className="text-sm text-gray-400">
              Manage automated recovery processes
            </p>
            <button className="w-full mt-4 bg-[#460073] py-2 rounded-md hover:bg-[#36005a] transition-colors">
              Initiate Recovery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
