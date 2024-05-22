/* eslint-disable react/prop-types */

const AdminMailDesign = ({ emails }) => {
  return (
    <div className="bg-black min-h-screen p-10 text-white text-[16px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Mail</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {emails.map((email) => (
            <div
              key={email.id}
              className="bg-gray-900 rounded-lg shadow-lg p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">{email.subject}</h2>
                <span
                  className={`${
                    email.read ? "text-gray-400" : "text-[#a100ff]"
                  }`}
                >
                  {email.read ? "Read" : "Unread"}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{email.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">{email.sender}</span>
                <span className="text-sm">{email.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMailDesign;
