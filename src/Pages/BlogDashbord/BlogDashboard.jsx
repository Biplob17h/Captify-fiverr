/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const BlogDashboard = ({ show }) => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "2024-05-15",
      summary:
        "A comprehensive guide to understanding and using React Hooks in your projects.",
    },
    {
      id: 2,
      title: "Tailwind CSS Best Practices",
      author: "Jane Smith",
      date: "2024-04-22",
      summary:
        "Tips and best practices for using Tailwind CSS effectively in your web projects.",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      author: "Alice Johnson",
      date: "2024-03-30",
      summary:
        "An overview of the most important features introduced in ECMAScript 6 (ES6).",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 ${
        show === "blog" ? "" : "hidden"
      } text-[16px]`}
    >
      {/* Header */}
      <div className="bg-[#460073] p-4 rounded-md shadow-md flex md:flex-row flex-col  md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 flex items-center mt-5 md:mt-0 mx-16 md:mx-0">
          <FaPlus className="mr-2" /> Create Blog Post
        </button>
      </div>

      {/* Blog Posts List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-400 mb-2">by {blog.author}</p>
            <p className="text-gray-400 mb-2">{blog.date}</p>
            <p className="text-gray-300 mb-4">{blog.summary}</p>
            <div className="flex justify-end space-x-2">
              <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">
                <FaEdit />
              </button>
              <button className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
