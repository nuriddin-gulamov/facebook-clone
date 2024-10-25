import { useDispatch } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

import logo from "../../assets/logos/logo.png";

function HeaderLeft() {
    const dispatcher = useDispatch();

    function toggleMobileMenu() {
        dispatcher({ type: "TOGGLE_MOBILE_MENU" });
    }

    return <div className="flex flex-2 items-center py-[7.5px]">
        <img
            src={'' + logo}
            alt="Facebook Clone"
            className="h-[40px] w-[40px] mr-[10px]"
        />
        <div className="flex justify-center items-center bg-gray-100 dark:bg-dark-100 px-[10px] h-[40px] rounded-full w-[240px] max-xl:w-[40px]">
            <GoSearch className="text-[16px] text-gray-400 dark:text-gray-300" />
            <input
                type="text"
                placeholder="Search Facebook"
                className="ml-[10px] bg-transparent placeholder:font-light w-[100%] text-[15px] text-gray-400 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 outline-0 max-xl:hidden"
            />
        </div>
        <button
            className="w-[40px] h-[40px] py-[2.5px] lg:hidden rounded-full bg-gray-100 dark:bg-dark-100 flex justify-center items-center ml-[10px]"
            onClick={toggleMobileMenu}
        >
            <BiMenu className="text-[30px] text-gray-400 dark:text-gray-300"/>
        </button>
    </div>;
}

export default HeaderLeft;
