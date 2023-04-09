import { useState } from 'react';

import { NAV_BUTTONS } from '../../data/buttons';
import NavButton from '../UI/NavButton';

function HeaderCenter() {
  // eslint-disable-next-line
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="flex flex-4 pl-[15px] justify-between items-center max-lg:hidden">
      {NAV_BUTTONS.map((button, index) => (
        <NavButton Icon={button.icon} activeBtn={activeBtn} index={index} />
      ))}
    </div>
  );
}

export default HeaderCenter;
