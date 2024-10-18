import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

function PostHeader({ Icon, name, posted, postPublic }) {
    return <div className="flex justify-between items-center px-[10px]">
        <div className="flex items-center">
            <div className="h-[40px] w-[40px] flex justify-center items-center bg-gray-100 rounded-full">
                <img src={Icon} alt="" className="rounded-full" />
            </div>
            <div className="ml-[15px]">
                <h3 className="leading-5">{name}</h3>
                <div className="flex max-[310px]:flex-col max-[310px]:items-start items-center text-[14px]">
                <p className="max-[310px]:text-[14px]">{posted}</p>
                <span className="mx-[3.5px] max-[310px]:hidden">·</span>
                    {postPublic ? <BiWorld /> : <FaUsers />}
                </div>
            </div>
        </div>
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-300 cursor-pointer transition duration100 ease">
            <FiMoreHorizontal />
        </div>
    </div>;
}

export default PostHeader;
