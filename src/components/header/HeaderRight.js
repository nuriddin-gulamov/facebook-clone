import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";

import { HEADER_RIGHT_BUTTONS } from "../../data/buttons";

function HeaderRight() {
  const dispatcher = useDispatch();

  function handleLogout() {
    dispatcher({ type: "UNAUTHENTICATE" });
  }

  return (
    <div className="flex flex-2 justify-end item-center">
      {HEADER_RIGHT_BUTTONS.map((button, index) => {
        const Icon = button.icon;

        return (
          <button
            className={`w-[40px] h-[40px] max-sm:hidden flex justify-center items-center bg-gray300 rounded-full ${
              index !== 0 && "ml-[10px]"
            }`}
            key={index}
          >
            <Icon className="text-[19px] text-black100" />
          </button>
        );
      })}
      <button
        className="w-[40px] h-[40px] flex justify-center items-center bg-gray300 rounded-full ml-[10px]"
        key={Math.random()}
        onClick={handleLogout}
      >
        <FaUser className="text-[19px] text-black100" />
      </button>
    </div>
  );
}

export default HeaderRight;
