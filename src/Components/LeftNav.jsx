import { FaHome, FaTasks, FaUsers, FaCube, FaCogs, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const LeftNav = () => {
  return (
    <div className="lg:flex flex-col bg-cardbg border-r fixed  min-h-screen top-22 left-0  border-gray-500 shadow-sm p-4">
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 border rounded text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex-1">
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaHome className="text-gray-500" />
            <span className="flex-1">Home</span>
            <span className="bg-blue-100 text-blue-600 rounded-full text-xs px-2 py-0.5">10</span>
          </li>
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaTasks className="text-gray-500" />
            <span className="flex-1">Tasks</span>
          </li>
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaUsers className="text-gray-500" />
            <span className="flex-1">Users</span>
            <span className="bg-purple-100 text-purple-600 rounded-full text-xs px-2 py-0.5">2</span>
          </li>
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaCube className="text-gray-500" />
            <span className="flex-1">APIs</span>
          </li>
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaCogs className="text-gray-500" />
            <span className="flex-1">Subscription</span>
          </li>
          <li className="flex items-center gap-3 p-2 text-gray-400 rounded cursor-pointer">
            <FaCogs className="text-gray-500" />
            <span className="flex-1">Settings</span>
          </li>
          <li className="flex items-center gap-3 p-2 hover text-gray-400 rounded cursor-pointer">
            <FaQuestionCircle className="text-gray-500" />
            <span className="flex-1">Help & Support</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Pro Section */}
      <div className="mt-4 p-3 text-gray-400 rounded-lg text-xs text-gray-600 flex flex-col gap-2">
        <p>Enjoy unlimited access to our app with only a small price monthly.</p>
        <div className="flex gap-2 text-blue-600">
          <button className="hover:underline">Dismiss</button>
          <button className="hover:underline font-semibold">Go Pro</button>
        </div>
      </div>

      {/* User Profile */}
      <div className="mt-4 flex items-center gap-2 p-2 hover text-gray-400 rounded cursor-pointer">
        <FaUserCircle className="text-3xl text-gray-500" />
        <div className="flex-1">
          <p className="text-sm font-medium">Azunyan U. Wu</p>
          <p className="text-xs text-gray-400">Basic Member</p>
        </div>
        <IoIosArrowForward className="text-gray-400" />
      </div>
    </div>
  );
};

export default LeftNav;
