/* eslint-disable react/prop-types */
import adminPhoto from '../../assets/users/admin.png'
const AdminProfile = ({ show }) => {
  const admin = {
    avatar: adminPhoto,
    name: "Jon Snow",
    email: "admin@captify.com",
    role: "Administrator",
    company: "Captify",
  };
  return (
    <div
      className={`bg-black min-h-screen p-10 text-white text-[16px] ${
        show === "admin" ? "" : "hidden"
      }`}
    >
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={admin.avatar}
            alt="Admin Avatar"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <p className="bg-gray-800 p-3 rounded-lg">{admin.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <p className="bg-gray-800 p-3 rounded-lg">{admin.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Role</label>
              <p className="bg-gray-800 p-3 rounded-lg">{admin.role}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Company</label>
              <p className="bg-gray-800 p-3 rounded-lg">{admin.company}</p>
            </div>
            <button className="customBtn1 w-full ">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
