import { useSelector } from 'react-redux';

import Stories from './Stories';
import Share from './Share';
import Posts from './Posts';

function Feed() {
  const mobileMenuOpened = useSelector((state) => state.mobileMenuOpened);

  return (
    <div
      className={`py-[20px] px-[10px] flex flex-col flex-4 items-center ${
        mobileMenuOpened && 'hidden'
      }`}
    >
      <Stories />
      <Share />
      <Posts />
    </div>
  );
}

export default Feed;
