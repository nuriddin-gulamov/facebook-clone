import { useSelector, useDispatch } from 'react-redux';
import { BiMenu } from 'react-icons/bi';

import Input from '../UI/Input';
import logo from '../../assets/logo.png';

function HeaderLeft() {
  const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);
  const dispatcher = useDispatch();

  function toggleMobileMenu() {
    if (mobileMenuOpened) {
      dispatcher({ type: 'CloseMobileMenu' });
    } else {
      dispatcher({ type: 'OpenMobileMenu' });
    }
  }

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
        placeholder="Search Facebook"
        withIcon
      />
      <button
        className="h-[100%] w-[50px] py-[2.5px] lg:hidden rounded-lg hover:bg-gray200 flex justify-center items-center ml-[10px]"
        onClick={toggleMobileMenu}
      >
        <BiMenu className="text-[35px] text-gray350" />
      </button>
    </div>
  );
}

export default HeaderLeft;
