import { useState } from "react";
import "./App.css";
import { FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from './images/logo.png'

function App() {
  const [isActive, setActive] = useState("home");

  const activenavHandler = (tab) => {
    setActive(tab);
  };
  return (
    <section>
      <div className="bg-mainbg">
        <div className="w-11/12 mx-auto">
          <div className="navbar bg-mainbg shadow-sm">
            <div className="flex-1 items-center">
              <div className="flex items-center">
                <img src={logo} alt="navlogo" className="w-12" />
              <a className=" text-neoncl font-mono hover:bg-transparent join text-xl"><span className="join-item p-0 font-logo">wishper</span><span className="text-white join-item font-logo p-0">wall</span></a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-3xl text-white"><IoIosNotificationsOutline /></p>
              <p className="text-3xl text-white"><FiUser /></p>
            </div>
          </div>

          <div className="dock bg-neutral lg:hidden flex text-neutral-content">
            <button
              onClick={() => activenavHandler("home")}
              className={isActive === "home" ? "dock-active text-neoncl" : ""}
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
              onClick={() => activenavHandler("inbox")}
              className={isActive === "inbox" ? "dock-active" : ""}
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
                    points="3 14 9 14 9 17 15 17 15 14 21 14"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    stroke-miterlimit="10"
                    strokeWidth="2"
                  ></rect>
                </g>
              </svg>
              <span className="dock-label">Inbox</span>
            </button>

            <button
              onClick={() => activenavHandler("settings")}
              className={isActive === "settings" ? "dock-active" : ""}
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
