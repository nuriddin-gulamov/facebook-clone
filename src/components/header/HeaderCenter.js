import { useState } from "react";

import { NAV_BUTTONS } from "../../data/buttons";

function HeaderCenter() {
    // eslint-disable-next-line
    const [activeBtn, setActiveBtn] = useState(0);

    return <div className="flex flex-4 justify-center items-center max-lg:hidden">
        {NAV_BUTTONS.map((button, index) => {
            const Icon = button.icon;
            return (
                <button
                    className={`h-[56px] w-[110px] flex justify-center items-center ml-[15px] first:ml-0 
                        ${ activeBtn === index && "border-b-[3px] border-primary" } 
                        ${ activeBtn !== index && "hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg h-[48px]" }
                    `}
                >
                    <Icon className={`text-[28px] ${ activeBtn === index ? "text-primary" : "text-gray-400 dark:text-gray-300" }`} />
                </button>
            );
        })}
    </div>;
}

export default HeaderCenter;
