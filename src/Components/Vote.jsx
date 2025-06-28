import { useState } from "react";
import pp from "../images/profilepic.png";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

const Vote = () => {

  const [post,setPost] =useState('');
  const postsubmitHandler = e =>{
    e.preventDefault();
    const userpost = e.target.value;
    setPost(userpost);

  }
  const [like,setLike] = useState(0);
  const [liked,setLiked] = useState(false);
  
  return (
    <div className="font-normal mb-10 mt-2 p-2">
      <div >
       <form onSubmit={postsubmitHandler}>
        <div className="flex justify-center gap-1 ">
          {post&& <h1 className="text-white">{post}</h1>}
         <img
          className="w-10 h-10 object-cover rounded-xl"
          src={pp}
          alt="profilepic"
        />
        <textarea name="wishper" required placeholder="Start a wishper, the wall listens..." className="border-2 bg-transparent outline-none rounded-md px-3 py-1 w-full border-gray-500 " id=""></textarea>
       </div>
        <div className="flex justify-end">
          
          <input type="submit" className="btn btn-sm mt-1 mr-1 bg-mainbg border-transparent text-textcl shadow-none" value="Post" />
        </div>
       </form>
      </div>
      
       <div className="mt-4">
        {/* Dummy post 1 */}
        <div className="bg-mainbg p-3 rounded-xl mb-2">
          <div className="flex gap-2 items-center text-sm text-gray-400 mb-2">
            <span className="bg-cardbg text-xs px-2 py-1 rounded-full">Anonymous</span>
            <span>2 mins ago</span>
          </div>
          <p className="text-white mb-2">
            Should remote work become the norm for tech jobs? 🏡💻
          </p>
          <div className="flex gap-2">
            <button className="bg-green-600/20 flex items-center text-green-400 px-3 py-1 rounded-full">
              <AiTwotoneLike /> 10
            </button>
            <button className="bg-red-600/20 flex items-center text-red-400 px-3 py-1 rounded-full">
              <AiTwotoneDislike /> 4
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">14 votes total</p>
        </div>

        {/* Dummy post 2 */}
        <div className="bg-mainbg p-3 rounded-xl mb-2">
          <div className="flex gap-2 items-center text-sm text-gray-400 mb-2">
            <span className="bg-cardbg text-xs px-2 py-1 rounded-full">Anonymous</span>
            <span>10 mins ago</span>
          </div>
          <p className="text-white mb-2">
            Do you believe in a 4-day work week? 🤔✨
          </p>
          <div className="flex gap-2">
            <button className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
              👍 20
            </button>
            <button className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
              👎 5
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">25 votes total</p>
        </div>
      </div>
    </div>
  );
};

export default Vote;
