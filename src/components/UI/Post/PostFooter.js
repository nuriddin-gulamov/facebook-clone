import { useDispatch } from "react-redux";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

import { POST_BUTTONS } from "../../../data/buttons";
import ShareButton from "../buttons/ShareButton";

function PostFooter({ likeCount, commentCount, shareCount, liked, postId }) {
  const dispatcher = useDispatch();

  let LikeIcon = liked ? AiFillLike : BiLike;

  function likeHandler() {
    dispatcher({ type: "TOGGLE_POST_LIKE", payload: { postId } });
  }

  return (
    <div className="px-[10px]">
      <div className="flex justify-between items-center py-[10px]">
        <div className="flex items-center cursor-pointer">
          <BiLike />
          <p className="ml-[5px]">{likeCount}</p>
        </div>
        <div className="flex items-center text-gray400 cursor-pointer">
          <p>{commentCount} comments</p>
          <p className="ml-[10px]">{shareCount} shares</p>
        </div>
      </div>
      <div className="flex max-[310px]:flex-col items-center border-t-[1px] border-gray300 pt-[5px]">
        <button
          onClick={likeHandler}
          className="px-[10px] py-[5px] flex justify-center max-[310px]:justify-start items-center w-[100%] hover:bg-gray100 rounded-lg transition duration200 ease"
        >
          <LikeIcon className="text-[22px]" />
          <p className="ml-[10px] text-gray350 text-[16px]">Like</p>
        </button>
        {POST_BUTTONS.map((button, index) => (
          <ShareButton Icon={button.icon} className='justify-center max-[310px]:justify-start' title={button.title} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PostFooter;
