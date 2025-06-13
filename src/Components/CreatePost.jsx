import { RxCross2 } from "react-icons/rx";

const CreatePost = ({setShow}) => {
  return (
    <div className="text-gray-300">
      <div className="flex justify-between w-11/12 mx-auto py-2 items-center">
        <button onClick={()=>{setShow(prev => !prev)}} className="text-2xl"><RxCross2 /></button>
        <button className="btn btn-sm mt-1 mr-1 bg-mainbg border-2 text-textcl shadow-none">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
