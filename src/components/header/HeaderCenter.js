import { useState } from 'react';

import { NAV_BUTTONS } from '../../data/buttons';
import NavButton from '../UI/buttons/NavButton';

function HeaderCenter() {
  // eslint-disable-next-line
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="flex flex-4 justify-center items-center max-lg:hidden">
      {NAV_BUTTONS.map((button, index) => (
        <NavButton Icon={button.icon} activeBtn={activeBtn} key={index} index={index} />
      ))}
    </div>
  );
}

export default HeaderCenter;
