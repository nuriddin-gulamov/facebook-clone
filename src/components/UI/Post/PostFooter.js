import { BiLike } from "react-icons/bi";

import { POST_BUTTONS } from "../../../data/buttons";
import ShareButton from "../buttons/ShareButton";

function PostFooter() {
  return (
    <div className="px-[10px]">
      <div className="flex justify-between items-center py-[10px]">
        <div className="flex items-center cursor-pointer">
          <BiLike />
          <p className="ml-[5px]">1.2K</p>
        </div>
        <div className="flex items-center text-gray400 cursor-pointer">
          <p>789 comments</p>
          <p className="ml-[10px]">28 shares</p>
        </div>
      </div>
      <div className="flex items-center border-t-[1px] border-gray300 pt-[5px]">
        {POST_BUTTONS.map((button) => (
          <ShareButton Icon={button.icon} title={button.title} />
        ))}
      </div>
    </div>
  );
}

export default PostFooter;
