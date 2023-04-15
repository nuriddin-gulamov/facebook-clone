import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

function PostHeader({ Icon, name, posted, pPublic }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-gray100 rounded-full">
          <Icon />
        </div>
        <div className="ml-[15px]">
          <h3 className="leading-5">{name}</h3>
          <div className="flex items-center text-[14px]">
            <p>{posted}</p>
            <span className="mx-[3.5px]">·</span>
            {pPublic ? <BiWorld /> : <FaUsers />}
          </div>
        </div>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray100 hover:bg-gray300 cursor-pointer transition duration100 ease">
        <FiMoreHorizontal />
      </div>
    </div>
  );
}

export default PostHeader;
