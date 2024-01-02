import { useDispatch } from "react-redux";
import { FaUser, FaMoon } from "react-icons/fa";

import { HEADER_RIGHT_BUTTONS } from "../../data/buttons";

function HeaderRight() {
  const dispatcher = useDispatch();

  function handleLogout() {
    dispatcher({ type: "UNAUTHENTICATE" });
  }

  function handleDarkModeToggle() {
      dispatcher({ type: "TOGGLE_DARK_MODE" });
  }

  return (
      <div className="flex flex-2 justify-end item-center">
          <button
              className="w-[40px] h-[40px] flex justify-center items-center bg-gray300 dark:bg-black300 rounded-full ml-[10px] first:ml-0"
              key={Math.random()}
              onClick={handleDarkModeToggle}
          >
              <FaMoon className="text-[19px] text-black100 dark:text-gray300"/>
          </button>
          {HEADER_RIGHT_BUTTONS.map((button, index) => {
              const Icon = button.icon;

              return (
                  <button
                      className="w-[40px] h-[40px] max-sm:hidden flex justify-center items-center bg-gray300 dark:bg-black300 rounded-full ml-[10px] first:ml-0"
                      key={index}
                  >
                      <Icon className="text-[19px] text-black100 dark:text-gray300"/>
                  </button>
              );
          })}
          <button
              className="w-[40px] h-[40px] flex justify-center items-center bg-gray300 dark:bg-black300 rounded-full ml-[10px] first:ml-0"
              key={Math.random()}
              onClick={handleLogout}
          >
              <FaUser className="text-[19px] text-black100 dark:text-gray300"/>
          </button>
      </div>
  );
}

export default HeaderRight;
