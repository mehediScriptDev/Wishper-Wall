import pp from "../images/profilepic.png";

const Vote = () => {
  return (
    <div className="font-normal  mt-2 p-2">
      <div className="flex justify-center gap-1 items-center">
        <img
                      className="w-10 h-10 object-cover rounded-xl"
                      src={pp}
                      alt="profilepic"
                    />
        <input
          type="text"
          name="wishper"
          className="w-full px-3 py-1 rounded-lg border-gray-400  border-2"
          id=""
          placeholder="Start a wishper, the wall listens..."
        />
        
      </div>
    </div>
  );
};

export default Vote;
