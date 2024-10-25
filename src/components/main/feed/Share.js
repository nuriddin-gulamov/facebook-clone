import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import { SHARE_BUTTONS } from "../../../data/buttons";

function Share() {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [validationError, setValidationError] = useState(false);

    const dispatcher = useDispatch();

    function enteredTitleHandler(e) {
        setValidationError(false);
        setEnteredTitle(e.target.value);
    }

    async function addPostHandler(e) {
        e.preventDefault();
        if (enteredTitle.trim().length === 0) setValidationError(true);
        else {
            setValidationError(false);
            dispatcher({
                type: "ADD_POST",
                payload: { title: enteredTitle }
            });
            setEnteredTitle('');
        }
    }

    return <div className="w-[90%] max-[310px]:w-[95%] px-[15px] py-[10px] bg-white dark:bg-dark-200 rounded-lg mt-[35px] shadow-md">
        <div className="flex items-center">
            <div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-gray-100 dark:bg-dark-100 dark:text-gray-300 rounded-full mr-[10px]">
                    <FaUser/>
                </div>
            </div>
            <form onSubmit={addPostHandler} className="w-full flex gap-[10px]">
                <input
                    type="text"
                    onChange={enteredTitleHandler}
                    placeholder="What's on your mind, Nuriddin?"
                    className={`w-full bg-gray-100 dark:bg-dark-100 px-[10px] h-[40px] rounded-full placeholder:font-light text-[15px] text-gray-400 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 outline-0 ${validationError && 'border border-red'}`}
                />
                <div><button type="submit" className="w-[40px] h-[40px] rounded-full flex justify-center items-center transition bg-gray-100 dark:bg-dark-100 hover:bg-gray-200"><IoSend className="dark:text-gray-300" /></button></div>
            </form>
        </div>
        <div className="flex max-sm:flex-col pt-[10px] border-t-[1px] border-gray-300 dark:border-dark-100 mt-[15px]">
            {SHARE_BUTTONS.map((button, index) => {
                const Icon = button.icon;

                return <button key={index} className="px-[10px] py-[5px] flex sm:justify-center items-center w-[100%] hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition duration200 ease">
                    <Icon className="text-[22px]"/>
                    <p className="ml-[10px] text-gray-400 dark:text-gray-300 text-[16px]">{button.title}</p>
                </button>;
            })}
        </div>
    </div>;
}

export default Share;
