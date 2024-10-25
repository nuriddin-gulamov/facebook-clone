import moment from "moment";
import { FaUser } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import nuriddin from "../../../assets/posts/avatars/1.png";

function PostHeader({ avatar, name, date }) {
    console.log(moment('29 Apr, 2023, 16:28').toISOString())
    return <div className="flex justify-between items-center px-[10px]">
        <div className="flex items-center">
            <div className="h-[40px] w-[40px] flex justify-center items-center bg-gray-100 dark:bg-dark-100 rounded-full">
                {avatar === 'nuriddin' ? <img src={nuriddin} alt="" className="rounded-full" /> : <FaUser />}
            </div>
            <div className="ml-[15px]">
                <h3 className="leading-5">{name}</h3>
                <div className="flex max-[310px]:flex-col max-[310px]:items-start items-center text-[14px]">
                    <p className="max-[310px]:text-[14px]">{moment(date).format('DD MMM YYYY, hh:mm')}</p>
                    <span className="mx-[3.5px] max-[310px]:hidden">·</span><BiWorld />
                </div>
            </div>
        </div>
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-300 cursor-pointer transition duration100 ease">
            <FiMoreHorizontal />
        </div>
    </div>;
}

export default PostHeader;
