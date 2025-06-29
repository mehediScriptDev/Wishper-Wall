import "./App.css";
import { FaCirclePlus } from "react-icons/fa6";

import Nav from "./Components/Nav/Nav";
import { Outlet } from "react-router";
import LeftNav from "../src/Components/LeftNav";
import { useState } from "react";
import CreatePost from "./Components/CreatePost";
import Rightnav from "./Components/Rightnav";

function App() {
  const [show, setShow] = useState(false);
  const navigationBtn = () => {
    setShow(!show);
  };
  
  return (
    <section className="relative">
      <div className="bg-cardbg ">
        <Nav></Nav>

        <div className="grid grid-cols-12 gap-3">
          <div className="lg:col-span-3 hidden lg:block">
            <LeftNav></LeftNav>
          </div>
          <div className="w-11/12 mt-20 col-span-12 lg:col-span-6 mx-auto">
            <Outlet></Outlet>

            <div className="dock w-full fixed bottom-0  bg-mainbg lg:hidden flex justify-between text-neutral-content">
              <button className="">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <polyline
                      points="1 11 12 2 23 11"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></polyline>
                    <path
                      d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <line
                      x1="12"
                      y1="22"
                      x2="12"
                      y2="18"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></line>
                  </g>
                </svg>
                <span className="dock-label">Home</span>
              </button>

              <button
                onClick={navigationBtn}
                className="text-5xl transform text-neoncl -translate-y-2/6"
              >
                <p className=" bg-black border-mainbg border-4 rounded-full">
                  <FaCirclePlus />
                </p>
                <span className="dock-label">Post</span>
              </button>
              <button className="">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
                <span onClick={()=>document.getElementById('my_modal_5').showModal()} className="dock-label">Settings</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 hidden lg:block">
          <Rightnav></Rightnav>
          </div>
          <dialog id="my_modal_5" className="modal modal-middle *:text-gray-400 bg-cardbg">
        <div className="modal-box bg-cardbg">
          <h3 className="text-2xl font-bold text-neoncl">Coming Soon!</h3>
          <p className="py-4">
            We’re building this feature; Thanks for your patience!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-neoncl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
        </div>
      </div>
      {show ? (
        <div className="bg-cardbg min-h-screen z-20 fixed top-0 w-screen">
          <CreatePost setShow={setShow}></CreatePost>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
