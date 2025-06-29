import logo from "../../images/logo.png";
import { FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = () => {
  return (
    <div className="fixed top-0 bg-cardbg z-40 w-full backdrop-blur-2xl">
      <div className="navbar bg-cardbg shadow-sm">
        <div className="flex-1 items-center">
          <div className="flex items-center">
            <img src={logo} alt="navlogo" className="w-14 " />
            <a className=" text-neoncl font-mono hover:bg-transparent join -ml-2 text-2xl">
              <span className="join-item p-0 font-logo">wishper</span>
              <span className="text-white join-item font-logo p-0">wall</span>
            </a>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p onClick={()=>{document.getElementById('my_modal_5').showModal()}} className="text-3xl lg:text-2xl cursor-pointer text-white">
            <IoIosNotificationsOutline />
          </p>
          <p className="text-3xl lg:text-2xl cursor-pointer text-white">
            <FiUser />
          </p>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Nav;
