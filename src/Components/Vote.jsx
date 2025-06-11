import profilepice from '../images/profilepic.png'

const Vote = () => {
    return (
        <div className='font-normal bg-mainbg mt-2 p-2'>
            <input type="text" name="wishper"  id="" />
            <img src={profilepice} alt="profile" className="w-10 h-10 rounded-full object-cover border-neoncl border-2 mr-3" />
        </div>
    );
};

export default Vote;