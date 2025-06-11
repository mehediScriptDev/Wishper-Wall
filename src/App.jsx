
import "./App.css";
import { FaCirclePlus } from "react-icons/fa6";

import Nav from "./Components/Nav/Nav";
import { Outlet } from "react-router";

function App() {
  
  return (
    <section>
      <div className="bg-cardbg">
        <Nav></Nav>
        <div className="w-11/12 mx-auto">
          

          <Outlet></Outlet>

          <div className="dock w-full fixed bottom-0  bg-mainbg lg:hidden flex justify-between text-neutral-content">
            <button
             
              className=""
            >
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
             
              className="text-5xl transform text-neoncl -translate-y-2/6"
            >
              
              <p className=" bg-black border-mainbg border-4 rounded-full">
                            <FaCirclePlus />
                          </p>
              <span className="dock-label">Post</span>
            </button>

            <button
             
              className=""
            >
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
              <span className="dock-label">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
