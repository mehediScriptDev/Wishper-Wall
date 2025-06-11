import pp from "../images/download.jpeg";
import { FaCirclePlus } from "react-icons/fa6";
import PostCard from "./PostCard";

const Home = () => {
  return (
    //    <div className='py-4 w-11/12 mx-auto overflow-x-auto flex gap-4 scrollbar-hide'> {/* 1️⃣ Add overflow-x-auto for horizontal scroll */}
    // <div className='flex-shrink-0 flex flex-col justify-center items-center'>
    <section>
      <div className="py-4  flex gap-4 overflow-x-auto scrollbar-hide w-full">
        <div className=" flex justify-center flex-shrink-0 items-center flex-col">
          <div className="relative ">
            <img
              className="w-16 h-16 object-cover rounded-xl"
              src={pp}
              alt="profilepic"
            />
            <p className="absolute z-20 -bottom-1 -right-1 bg-black border-mainbg border-2 rounded-full text-xl text-neoncl">
              <FaCirclePlus />
            </p>
          </div>
          <p className="text-white text-center">My story</p>
        </div>
        {["Sajjat", "Sajjat", "Mehedi", "Arif", "Hasib", "Rifat", "Noyon"].map(
          (name, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col justify-center items-center"
            >
              <img
                className="w-15 h-16 object-cover border-2 border-neoncl rounded-xl"
                src={pp}
                alt={name}
              />
              <p className="text-gray-200 text-center">{name}</p>
            </div>
          )
        )}
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-white"
          aria-label="Tab 1"
        />
        <div className="tab-content border-base-300  bg-base-100 p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-white"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 3
        </div>
      </div>
      <div className="pb-10">
        <PostCard></PostCard>
      </div>
    </section>
  );
};

export default Home;
