import { RxCross2 } from "react-icons/rx";
import pp from "../images/profilepic.png";
import { FaLightbulb } from "react-icons/fa6";
import { useState } from "react";

const CreatePost = ({ setShow }) => {
  const [suggestion, setSuggestion] = useState("");
  const submitHander = (e) => {
    e.preventDefault();
    const postinfo = e.target.wishper.value;

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ content: postinfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          document.getElementById('my_modal_2').showModal();
        }
      });
  };
  return (
    <div className="text-gray-300 w-11/12 mx-auto">
      <div className="flex justify-between mt-9 py-2 items-center">
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
        <form onSubmit={submitHander}>
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
              defaultValue={suggestion}
              placeholder="Start a wishper, the wall listens..."
              className=" bg-transparent  focus:outline-none  transition duration-100 outline-none rounded-md px-3 py-1 w-full border-gray-500 "
              id=""
            ></textarea>

            <button
              onClick={() => setSuggestion("Solitude is power")}
              className="mt-1 text-xs flex items-center text-gray-500 italic"
            >
              <FaLightbulb className="text-neoncl" />
              Try: “Solitude is power.”
            </button>
            <button
              onClick={() => setSuggestion("Privacy is power.")}
              className="mt-1 text-xs flex items-center text-gray-500 italic"
            >
              <FaLightbulb className="text-neoncl" />
              Try: “Privacy is power.”
            </button>
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_2" className="modal modal-middle">
  <div className="modal-box bg-cardbg">
    
    <h3 className="font-bold text-4xl text-center text-neoncl">Posted</h3>
    
    <div className="modal-action flex items-center justify-center">
      <form method="dialog ">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-neoncl btn-xs">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default CreatePost;
