import { FaHeart, FaComment, FaShare, FaSadCry } from "react-icons/fa";
import profilepice from "../images/profilepic.png";
import { useState } from "react";

const PostForShow = ({ post }) => {
  const [likes, setLikes] = useState(true);
  const [liked, setLiked] = useState(0);

  const likesound = new Audio('/public/sound/likesound.mp3')

  const hitlike = () => {
    if (likes) {
      setLikes(false);
      setLiked(liked + 1);
      likesound.play()
    } else {
      setLikes(true);
      setLiked(liked - 1);
    }
  };
  const data = {
    user: {
      name: "anonymous001",
      profilePic:
        "https://www.gizbot.com/img/2017/01/browsinginincognitomodedoesntmakeyouanonymousanymorelead-20-1484906264.jpg",
      timeAgo: "51 mins. ago",
    },
    post: {
      text: `${post.content}`,
    },
    interactions: {
      likes: `${liked}`,
      comments: 0,
    },
  };
  return (
    <div>
      <div className="bg-black text-gray-200 mt-3 rounded-2xl p-4 w-full  mx-auto mb-3">
        {/* User Info */}
        <div className="flex items-center mb-3">
          <img
            src={profilepice}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border-neoncl border-2 mr-3"
          />
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

        {/* Interactions */}
        <div className="flex justify-between items-center border-b-[1px] py-3 border-neoncl pt-2 text-sm">
          <div className="flex items-center gap-2" onClick={hitlike}>
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
          <a href="#" onClick={()=>document.getElementById('my_modal_22').showModal()} className="ml-auto text-xs text-textcl underline">
            See All Comments
          </a>
        </div>
      </div>
      <dialog id="my_modal_22" className="modal modal-middle *:text-gray-400 bg-cardbg">
        <div className="modal-box bg-cardbg">
          <h3 className="text-2xl font-bold text-neoncl">Coming Soon!</h3>
          <p className="py-4">
            We’re building this feature; Thanks for your patience!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-neoncl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostForShow;
