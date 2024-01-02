import { GoSearch } from "react-icons/go";

function Input({ withIcon, className, fieldResponsive, placeholder }) {
  return (
    <div
      className={`flex items-center bg-gray100 dark:bg-black300 px-[10px] h-[40px] rounded-full ${className}`}
    >
      {withIcon && <GoSearch className={`text-[16px] text-gray400 dark:text-gray300`} />}
      <input
        type="text"
        placeholder={placeholder}
        className={`${
          withIcon && "ml-[10px]"
        } bg-transparent placeholder:font-light w-[100%] text-[15px] text-gray400 dark:text-gray300 placeholder:text-gray400 dark:placeholder:text-gray300 outline-0 ${fieldResponsive}`}
      />
    </div>
  );
}

export default Input;
