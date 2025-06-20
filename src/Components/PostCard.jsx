import profilepice from '../images/profilepic.png'
import { FaHeart, FaComment, FaShare, FaSadCry } from 'react-icons/fa';

const data = {
  user: {
    name: "anonymous001",
    profilePic: "https://www.gizbot.com/img/2017/01/browsinginincognitomodedoesntmakeyouanonymousanymorelead-20-1484906264.jpg",
    timeAgo: "51 mins. ago"
  },
  post: {
    text: "last week's picnic, at the perfect spot! 🌿🧡",
    images: 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDi_fGBlRSJHCTPv-r1MllKYZbMvi9mfnWtQ&s"
    
  },
  interactions: {
    likes: 315,
    comments: 21,
    likedBy: ["Anna", "Tom", "Lily"]
  }
};

const PostCard = () => {
  return (
    <div className="bg-black text-gray-200 mt-3 rounded-2xl p-4 w-full max-w-md mx-auto mb-10">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <img src={profilepice} alt="profile" className="w-10 h-10 rounded-full object-cover border-neoncl border-2 mr-3" />
        <div>
          <h3 className="text-white font-semibold">{data.user.name}</h3>
          <p className="text-gray-400 text-xs">{data.user.timeAgo}</p>
        </div>
        <div className="ml-auto text-gray-400">•••</div>
      </div>

      {/* Post Text */}
      <p className="mb-2">{data.post.text}</p>

      {/* Hashtags */}
     

      {/* Images */}
      <div className=" gap-2 mb-3">
        <img src={data.post.images} alt="post" className="rounded-lg object-cover w-full h-full" />
        
      </div>

      {/* Interactions */}
      <div className="flex justify-between items-center border-b-[1px] py-3 border-neoncl pt-2 text-sm">
        <div className="flex items-center gap-2">
          <FaHeart className="text-neoncl" />
          <span>{data.interactions.likes} reactions</span>
        </div>
         
         
        <div className="flex items-center gap-2">
          <FaComment className="text-neoncl" />
          <span>{data.interactions.comments} comments</span>
        </div>
       
      </div>

      {/* Likes Preview */}
      <div className="flex mt-2 items-center gap-2">
        
        
        <a href="#" className="ml-auto text-xs text-textcl underline">See All Comments</a>
      </div>
    </div>
  );
};

export default PostCard;
