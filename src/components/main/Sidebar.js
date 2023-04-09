import { useState } from 'react';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

import { SIDEBAR_BUTTONS, SIDEBAR_MORE_BUTTONS } from '../../data/buttons';
import SidebarButton from '../UI/SidebarButton';

function Sidebar() {
  const [moreButtonsOpened, setMoreButtonsOpened] = useState(false);

  function toggleMoreButtons() {
    if (moreButtonsOpened) {
      setMoreButtonsOpened(false);
    } else {
      setMoreButtonsOpened(true);
    }
  }

  return (
    <div className="w-[20%] flex flex-col py-[20px] px-[10px] max-[1100px]:hidden">
      {SIDEBAR_BUTTONS.map((button, index) => (
        <SidebarButton Icon={button.icon} title={button.title} index={index} />
      ))}
      {moreButtonsOpened &&
        SIDEBAR_MORE_BUTTONS.map((button, index) => (
          <SidebarButton
            Icon={button.icon}
            title={button.title}
            index={index}
          />
        ))}
      <button
        className="flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray250 mt-[5px]"
        onClick={toggleMoreButtons}
      >
        <div className="w-[28px] h-[28px] flex justify-center items-center bg-gray275 rounded-full">
          {moreButtonsOpened ? (
            <SlArrowUp className="text-[15px]" />
          ) : (
            <SlArrowDown className="text-[15px]" />
          )}
        </div>
        <p className="ml-[15px]">
          {moreButtonsOpened ? 'See Less' : 'See More'}
        </p>
      </button>
    </div>
  );
}

export default Sidebar;
