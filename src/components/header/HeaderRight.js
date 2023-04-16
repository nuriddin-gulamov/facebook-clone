import { HEADER_RIGHT_BUTTONS } from "../../data/buttons";

function HeaderRight() {
  return (
    <div className="flex flex-2 justify-end item-center">
      {HEADER_RIGHT_BUTTONS.map((button, index) => {
        const Icon = button.icon;

        return (
          <button
            className={`w-[40px] h-[40px] flex justify-center items-center bg-gray300 rounded-full ${
              index !== 0 && "ml-[10px]"
            }`}
            key={index}
          >
            <Icon className="text-[19px] text-black100" />
          </button>
        );
      })}
    </div>
  );
}

export default HeaderRight;
