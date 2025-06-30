import { useEffect, useState } from "react";
import pp from "../images/profilepic.png";

import VotePost from "./VotePost";
import { useNavigate } from "react-router";

const Vote = () => {
const navigate =useNavigate();
  
  const postsubmitHandler = e =>{
    e.preventDefault();
    const userpost = e.target.wishper.value;
    fetch('http://localhost:5000/votes',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({content:userpost})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        document.getElementById('my_modal_222').showModal();
        navigate('/')
      }
    })
    

  }
 
const [votes,setVote] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/votes')
    .then(res=>res.json())
    .then(data=>setVote(data))
  },[])
  return (
    <div className="font-normal min-h-screen mb-10 mt-2 p-2">
      <dialog id="my_modal_222" className="modal modal-middle">
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
      <div >
       <form onSubmit={postsubmitHandler}>
        <div className="flex justify-center gap-1 ">
          
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
