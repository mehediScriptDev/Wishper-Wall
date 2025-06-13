import { RxCross2 } from "react-icons/rx";
import pp from "../images/profilepic.png";
import { FaLightbulb } from "react-icons/fa6";

const CreatePost = ({ setShow }) => {
  return (
    <div className="text-gray-300 w-11/12 mx-auto">
      <div className="flex justify-between  py-2 items-center">
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="text-2xl"
        >
          <RxCross2 />
        </button>
        {/* <button  className="btn btn-sm mt-1 mr-1 bg-mainbg border-transparent border-1 text-textcl shadow-none">
          Post
        </button> */}
      </div>
      <div>
        <form>
          <div className="flex flex-col justify-center mt-3 gap-1 ">
            <div className="items-center gap-2 flex">
              <img
                className="w-10 h-10 object-cover rounded-xl"
                src={pp}
                alt="profilepic"
              />
              <p className="text-xs opacity-25 border-gray-500 font-semibold border-[1px] p-1 rounded-3xl">
                Anonymous
              </p>
            </div>
            <textarea
              name="wishper"
              required
              placeholder="Start a wishper, the wall listens..."
              className=" bg-transparent  focus:outline-none  transition duration-100 outline-none rounded-md px-3 py-1 w-full border-gray-500 "
              id=""
            ></textarea>

            <p className="mt-1 text-xs flex items-center text-gray-500 italic">
              <FaLightbulb className="text-neoncl" />
              Try: “Solitude is power.”
            </p>
            <p className="mt-1 text-xs flex items-center text-gray-500 italic">
              <FaLightbulb className="text-neoncl" />
              Try: “Privacy is power.”
            </p>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn  btn-sm mt-2 mr-1 bg-mainbg border-transparent text-textcl shadow-none"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
