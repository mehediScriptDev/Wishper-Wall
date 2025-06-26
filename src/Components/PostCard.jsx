import { useEffect, useState } from "react";


import PostForShow from "./PostForShow";



const PostCard = () => {
  const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((result) => setPosts(result));
}, []);
  return (
    <div>
      {
      posts.map(post=> <PostForShow post={post}></PostForShow>)
    }
    </div>
  );
};

export default PostCard;
