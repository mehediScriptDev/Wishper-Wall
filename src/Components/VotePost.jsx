import React from 'react';
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

const VotePost = ({votee}) => {
    const {content,minAgo} =votee;
     const [like,setLike] = useState(0);
      const [liked,setLiked] = useState(false);
      const [dislike,setDislike] = useState(0);
      const btnaudio = new Audio('/public/sound/likesound.mp3')
    
      const likebbtn = ()=>{
        if(!liked){
          setLike(0+1);
          setLiked(true);
          btnaudio.play();
        }
        
      }
      const dislikebtn = ()=>{
        if(!liked){
          setDislike(0+1);
          setLiked(true);
          btnaudio.play();
        }
      }
    return (
        <div>
            <div className="bg-mainbg p-3 rounded-xl mb-2">
          <div className="flex gap-2 items-center text-sm text-gray-400 mb-2">
            <span className="bg-cardbg text-xs px-2 py-1 rounded-full">Anonymous</span>
            <span>{minAgo}</span>
          </div>
          <p className="text-white mb-2">
            Should remote work become the norm for tech jobs? 🏡💻
          </p>
          <div className="flex gap-2">
            <button onClick={likebbtn} className="bg-green-600/20 flex items-center text-green-400 px-3 py-1 rounded-full">
              <AiTwotoneLike /> {like}
            </button>
            <button onClick={dislikebtn} className="bg-red-600/20 flex items-center text-red-400 px-3 py-1 rounded-full">
              <AiTwotoneDislike /> {dislike}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">{like + dislike} votes total</p>
        </div>
        </div>
    );
};

export default VotePost;