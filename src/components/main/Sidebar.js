import { useState } from "react";
import { useSelector } from "react-redux";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

import { SIDEBAR_BUTTONS, SIDEBAR_MORE_BUTTONS } from "../../data/buttons";
import SidebarButton from "../UI/SidebarButton";

function Sidebar() {
    const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);
    const [moreButtonsOpened, setMoreButtonsOpened] = useState(false);

    function toggleMoreButtons() {
      if (moreButtonsOpened) setMoreButtonsOpened(false);
      else setMoreButtonsOpened(true);
    }

    return <div className={`flex flex-col flex-2 py-[20px] px-[10px] ${!mobileMenuOpened && "max-lg:hidden"}`}>
        <div className="flex flex-col">
            {SIDEBAR_BUTTONS.map((btn, i) =>
                <SidebarButton Icon={btn.icon} key={i}>{btn.title}</SidebarButton>)}
            {moreButtonsOpened && SIDEBAR_MORE_BUTTONS.map((btn, i) =>
                <SidebarButton Icon={btn.icon} key={i}>{btn.title}</SidebarButton>)}
            <button
                className="flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 dark:text-gray-300 mt-[5px]"
                onClick={toggleMoreButtons}
            >
                <div className="w-[28px] h-[28px] flex justify-center items-center bg-[#d8d9da] dark:bg-dark-200 dark:text-gray-300 rounded-full">
                    {
                        moreButtonsOpened
                          ? <SlArrowUp className="text-[15px]" />
                          : <SlArrowDown className="text-[15px]" />
                    }
                </div>
                <p className="ml-[15px]">{moreButtonsOpened ? "See Less" : "See More"}</p>
            </button>
        </div>
        <footer className="mt-[25px] px-[15px]">
            <p className="text-[14px] dark:text-gray-300">Nuriddin Gulamov - Facebook Clone &copy; {new Date().getFullYear()}</p>
        </footer>
    </div>;
}

export default Sidebar;
