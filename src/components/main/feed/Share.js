import { FaUser } from 'react-icons/fa';

import Input from '../../UI/Input';
import { SHARE_BUTTONS } from '../../../data/buttons';
import ShareButton from '../../UI/buttons/ShareButton';

function Share() {
  return (
    <div className="w-[90%] px-[15px] py-[10px] bg-white rounded-lg mt-[35px] shadow-md">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-gray100 rounded-full mr-[10px]">
          <FaUser />
        </div>
        <Input
          placeholder="What's on your mind, Nuriddin?"
          className="w-[90%]"
        />
      </div>
      <div className="flex pt-[10px] border-t-[1px] border-gray100 mt-[15px]">
        {SHARE_BUTTONS.map((button, index) => (
          <ShareButton Icon={button.icon} title={button.title} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Share;