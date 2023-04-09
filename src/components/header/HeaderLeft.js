import { BiMenu } from 'react-icons/bi';

import Input from '../UI/Input';
import logo from '../../assets/logo.png';

function HeaderLeft() {
  return (
    <div className="flex flex-2 items-center py-[7.5px]">
      <img
        src={logo}
        alt="Facebook Clone"
        className="h-[40px] w-[40px] mr-[10px]"
      />
      <Input
        className="w-[240px] max-xl:w-[40px]"
        fieldResponsive="max-xl:hidden"
      />
      <button className='h-[100%] w-[50px] py-[2.5px] lg:hidden rounded-lg hover:bg-gray200 flex justify-center items-center ml-[10px]'>
        <BiMenu className='text-[35px]' />
      </button>
    </div>
  );
}

export default HeaderLeft;
