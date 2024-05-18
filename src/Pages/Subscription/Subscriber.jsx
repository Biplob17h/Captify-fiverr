/* eslint-disable react/prop-types */
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Subscriber = ({ show }) => {
  // Array of Subscriber data
  const subscribers = [
    {
      name: "Hart Hagerty",
      subscription: "Free",
      status: "Active",
      country: "United States",
    },
    {
      name: "Brice Swyre",
      subscription: "Business",
      status: "Active",
      country: "China",
    },
    {
      name: "Marjy Ferencz",
      subscription: "Free",
      status: "Inactive",
      country: "Russia",
    },
    {
      name: "Yancy Tear",
      subscription: "Pro",
      status: "Active",
      country: "Brazil",
    },
  ];

  return (
    <div
      className={`${show === "Subscriber" ? "" : "hidden"} mx-8 bg-black p-4`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[17px] md:hidden">
        {subscribers.map((subscriber, index) => (
          <div key={index} className="bg-[#0f172a] shadow-md rounded-md p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={`https://img.daisyui.com/tailwind-css-component-profile-${
                      index + 2
                    }@56w.png`}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{subscriber.name}</div>
                <div className="text-sm opacity-50">{subscriber.country}</div>
              </div>
            </div>
            <div className="text-[16px] font-semibold mb-2">
              {subscriber.subscription}
            </div>
            <div className="flex items-center mb-2">
              {subscriber.status === "Active" ? (
                <MdVisibility size={18} className="text-green-500 mr-2" />
              ) : (
                <MdVisibilityOff size={18} className="text-red-500 mr-2" />
              )}
              <span
                className={
                  subscriber.status === "Active"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {subscriber.status}
              </span>
            </div>
            <div className="flex justify-between">
              <button className="btn btn-ghost btn-sm text-white bg-blue-500 hover:bg-blue-600">
                Upgrade
              </button>
              <button className="btn btn-ghost btn-sm text-white bg-red-500 hover:bg-red-600">
                Downgrade
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* for big screen */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subscription</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`https://img.daisyui.com/tailwind-css-component-profile-${
                            index + 2
                          }@56w.png`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{subscriber.name}</div>
                      <div className="text-sm opacity-50">
                        {subscriber.country}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[16px] font-semibold">
                  {subscriber.subscription}
                </td>
                <td>
                  <div className="flex items-center">
                    {subscriber.status === "Active" ? (
                      <MdVisibility size={18} className="text-green-500 mr-2" />
                    ) : (
                      <MdVisibilityOff
                        size={18}
                        className="text-red-500 mr-2"
                      />
                    )}
                    <span
                      className={
                        subscriber.status === "Active"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {subscriber.status}
                    </span>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm">Upgrade</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-sm">Downgrade</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriber;
