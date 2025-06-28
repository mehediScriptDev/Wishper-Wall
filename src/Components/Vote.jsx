import { useEffect, useState } from "react";
import pp from "../images/profilepic.png";

import VotePost from "./VotePost";

const Vote = () => {

  const [post,setPost] =useState('');
  const postsubmitHandler = e =>{
    e.preventDefault();
    const userpost = e.target.value;
    setPost(userpost);

  }
 
const [votes,setVote] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/votes')
    .then(res=>res.json())
    .then(data=>setVote(data))
  },[])
  return (
    <div className="font-normal min-h-screen mb-10 mt-2 p-2">
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
        {
          votes.map(votee=> <VotePost votee={votee}></VotePost>)
        }

        
      </div>
    </div>
  );
};

export default Vote;
