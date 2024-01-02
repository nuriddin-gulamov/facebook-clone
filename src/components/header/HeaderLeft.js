import { useDispatch } from "react-redux";
import { BiMenu } from "react-icons/bi";

import Input from "../UI/inputs/Input";
import logo from "../../assets/logos/logo.png";

function HeaderLeft() {
  const dispatcher = useDispatch();

  function toggleMobileMenu() {
    dispatcher({ type: "TOGGLE_MOBILE_MENU" });
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
        className="h-[100%] w-[50px] py-[2.5px] lg:hidden rounded-lg hover:bg-gray200 dark:hover:bg-black300 flex justify-center items-center ml-[10px]"
        onClick={toggleMobileMenu}
      >
        <BiMenu className="text-[35px] text-gray350 dark:text-gray300" />
      </button>
    </div>
  );
}

export default HeaderLeft;
