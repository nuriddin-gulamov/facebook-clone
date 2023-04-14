import Sidebar from './Sidebar';
import Feed from './feed/Feed';
import Contacts from './Contacts';

function Main() {
  return (
    <div className="flex px-[5px]">
      <Sidebar />
      <Feed />
      <Contacts />
    </div>
  );
}

export default Main;
