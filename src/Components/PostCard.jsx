import React from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const data = {
  user: {
    name: "Ashley Simons",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    timeAgo: "51 mins. ago"
  },
  post: {
    text: "last week's picnic, at the perfect spot! 🌿🧡",
    hashtags: ["#picnic", "#friends", "#summer", "#summervibes", "#nature"],
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
    <div className="bg-black text-gray-200 rounded-2xl p-4 w-full max-w-md mx-auto mb-6">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <img src={data.user.profilePic} alt="profile" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="text-white font-semibold">{data.user.name}</h3>
          <p className="text-gray-400 text-xs">{data.user.timeAgo}</p>
        </div>
        <div className="ml-auto text-gray-400">•••</div>
      </div>

      {/* Post Text */}
      <p className="mb-2">{data.post.text}</p>

      {/* Hashtags */}
      <div className="text-sm text-gray-400 mb-2">
        {data.post.hashtags.map(tag => (
          <span key={tag} className="mr-1">{tag}</span>
        ))}
      </div>

      {/* Images */}
      <div className=" gap-2 mb-3">
        <img src={data.post.images} alt="post" className="rounded-lg object-cover w-full h-full" />
        
      </div>

      {/* Interactions */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-2 text-sm">
        <div className="flex items-center gap-2">
          <FaHeart className="text-green-400" />
          <span>{data.interactions.likes} likes</span>
        </div>
        <div className="flex items-center gap-2">
          <FaComment className="text-green-400" />
          <span>{data.interactions.comments} comments</span>
        </div>
        <FaShare className="text-green-400" />
      </div>

      {/* Likes Preview */}
      <div className="flex mt-2 items-center gap-2">
        <div className="flex -space-x-2">
          {data.interactions.likedBy.map((name, idx) => (
            <img
              key={idx}
              src={`https://randomuser.me/api/portraits/thumb/men/${idx + 1}.jpg`}
              alt={name}
              className="w-6 h-6 rounded-full border border-black"
            />
          ))}
        </div>
        <p className="text-xs text-gray-400">{data.interactions.likedBy[0]} & {data.interactions.likes - 1} others</p>
        <a href="#" className="ml-auto text-xs text-green-400">See All Comments</a>
      </div>
    </div>
  );
};

export default PostCard;
