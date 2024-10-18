import { useSelector } from "react-redux";

import CONTACTS from "../../data/contacts";
import SidebarButton from "../UI/buttons/SidebarButton";

function Contacts() {
    const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);

    return <div className={`flex flex-2 flex-col py-[20px] px-[10px] max-[850px]:hidden ${mobileMenuOpened && "hidden"}`}>
        <h2 className="text-[22px] text-gray-400 dark:text-gray-300 mb-[10px] pl-[15px]">Contacts</h2>
        {CONTACTS.map((contact, index) => (
            <SidebarButton
                img={contact.img}
                key={index}
                index={index}
            >{contact.name}</SidebarButton>
        ))}
    </div>
}

export default Contacts;
