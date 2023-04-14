import { useSelector } from 'react-redux';

import CONTACTS from '../../data/contacts';

function Contacts() {
  const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);

  return (
    <div
      className={`flex flex-2 flex-col py-[20px] px-[10px] pl-[50px] max-[850px]:hidden ${
        mobileMenuOpened && 'hidden'
      }`}
    >
      <h2 className="text-[22px] text-gray400 mb-[10px] pl-[10px]">Contacts</h2>
      {CONTACTS.map((contact, index) => {
        const Icon = contact.icon;

        return (
          <button
            className={`flex items-center p-[10px] hover:bg-gray250 rounded-lg ${
              index !== 0 && 'mt-[5px]'
            }`}
          >
            <Icon className="text-[20px] text-gray400" />
            <p className="ml-[10px] text-black100 leading-5 text-left">{contact.name}</p>
          </button>
        );
      })}
    </div>
  );
}

export default Contacts;
