import { IoMdHome } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { FaItunesNote } from "react-icons/fa6";

const Lgnav = () => {
  return (
    <div>
      <div className="text-gray-400 flex mb-3 justify-between text-5xl">
        <IoMdHome className="text-gray-700" />
        <HiUserGroup />
        <IoMdNotifications />
        <FaItunesNote />
        <FaBrain />
      </div>
    </div>
  );
};

export default Lgnav;
