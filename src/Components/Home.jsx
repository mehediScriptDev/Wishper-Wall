import pp from "../images/download.jpeg";
import { FaCirclePlus } from "react-icons/fa6";
import PostCard from "./PostCard";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import Vote from "./Vote";
import Lgnav from "./Nav/Lgnav";

const Home = () => {
  const [selected, setSelected] = React.useState("you");
  const [post, setPost] = useState("");
  const postsubmitHandler = (e) => {
    e.preventDefault();
    const userpost = e.target.value;
    setPost(userpost);
  };
  return (
    //    <div className='py-4 w-11/12 mx-auto overflow-x-auto flex gap-4 scrollbar-hide'> {/* 1️⃣ Add overflow-x-auto for horizontal scroll */}
    // <div className='flex-shrink-0 flex flex-col justify-center items-center'>
    <section>
      <div>
        <Lgnav></Lgnav>
      </div>
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
                className="w-16 h-16 object-cover border-2 border-neoncl rounded-xl"
                src={pp}
                alt={name}
              />
              <p className="text-gray-200 font-thin  text-center">{name}</p>
            </div>
          )
        )}
      </div>
      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <div className="flex w-full mt-2 flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab
            key="you"
            className={
              selected === "you"
                ? "border-b-2 first-line:border-b-2 border-neoncl font-semibold text-gray-300"
                : "text-gray-400"
            }
            title="For you"
          >
            <Card>
              <CardBody className="border-transparent">
                <div className="pb-10">
                  <div className="hidden lg:block">
                    <form onSubmit={postsubmitHandler}>
                      <div className="flex justify-center gap-1 ">
                        {post && <h1 className="text-white">{post}</h1>}
                        <img
                          className="w-10 h-10 object-cover rounded-xl"
                          src={pp}
                          alt="profilepic"
                        />
                        <textarea
                          name="wishper"
                          required
                          placeholder="Start a wishper, the wall listens..."
                          className="border-2 bg-transparent outline-none rounded-md px-3 py-1 w-full border-gray-500 "
                          id=""
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <input
                          type="submit"
                          className="btn btn-sm mt-1 mr-1 bg-mainbg border-transparent text-textcl shadow-none"
                          value="Post"
                        />
                      </div>
                    </form>
                  </div>
                  <PostCard></PostCard>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="vote"
            className={
              selected === "vote"
                ? "border-b-2 first-line:border-b-2 font-semibold border-neoncl text-gray-300"
                : "text-gray-400"
            }
            title="Vote"
          >
            <Card>
              <CardBody>
                <div>
                  <Vote />
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Home;
