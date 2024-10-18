import { FaUser } from "react-icons/fa";

import { SHARE_BUTTONS } from "../../../data/buttons";
import ShareButton from "../../UI/buttons/IconButton";

function Share() {
    return <div className="w-[90%] max-[310px]:w-[95%] px-[15px] py-[10px] bg-white dark:bg-dark-200 rounded-lg mt-[35px] shadow-md">
        <div className="flex items-center">
            <div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-gray-100 dark:bg-dark-100 dark:text-gray-300 rounded-full mr-[10px]">
                    <FaUser/>
                </div>
            </div>
            <input
                type="text"
                placeholder="What's on your mind, Nuriddin?"
                className="w-full bg-gray-100 dark:bg-dark-100 px-[10px] h-[40px] rounded-full placeholder:font-light text-[15px] text-gray-400 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 outline-0"
            />
        </div>
        <div className="flex max-sm:flex-col pt-[10px] border-t-[1px] border-gray-300 dark:border-dark-100 mt-[15px]">
            {SHARE_BUTTONS.map((button, index) => (
                <ShareButton
                    Icon={button.icon}
                    className="justify-center max-sm:justify-start"
                    key={index}
                >{button.title}</ShareButton>
            ))}
        </div>
    </div>;
}

export default Share;
