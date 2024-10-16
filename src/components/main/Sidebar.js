import { useState } from "react";
import { useSelector } from "react-redux";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

import { SIDEBAR_BUTTONS, SIDEBAR_MORE_BUTTONS } from "../../data/buttons";
import SidebarButton from "../UI/buttons/SidebarButton";

function Sidebar() {
  const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);
  const [moreButtonsOpened, setMoreButtonsOpened] = useState(false);

  function toggleMoreButtons() {
    if (moreButtonsOpened) {
      setMoreButtonsOpened(false);
    } else {
      setMoreButtonsOpened(true);
    }
  }

  return (
    <div
      className={`flex flex-col flex-2 py-[20px] px-[10px] ${
        !mobileMenuOpened && "max-lg:hidden"
      }`}
    >
      <div className="flex flex-col">
        {SIDEBAR_BUTTONS.map((button, index) => (
          <SidebarButton
            Icon={button.icon}
            title={button.title}
            key={index}
            index={index}
          />
        ))}
        {moreButtonsOpened &&
          SIDEBAR_MORE_BUTTONS.map((button, index) => (
            <SidebarButton
              Icon={button.icon}
              title={button.title}
              key={index}
              index={index}
            />
          ))}
        <button
          className="flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray250 dark:hover:bg-black300 dark:text-gray300 mt-[5px]"
          onClick={toggleMoreButtons}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-gray275 dark:bg-gray400 dark:text-gray300 rounded-full">
            {moreButtonsOpened ? (
              <SlArrowUp className="text-[15px]" />
            ) : (
              <SlArrowDown className="text-[15px]" />
            )}
          </div>
          <p className="ml-[15px]">
            {moreButtonsOpened ? "See Less" : "See More"}
          </p>
        </button>
      </div>
      <footer className="mt-[25px] px-[15px]">
        <p className="text-[14px] dark:text-gray300">
          Nuriddin Gulamov - Facebook Clone &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
