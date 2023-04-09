import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <div className='flex justify-between items-center px-[15px] bg-white shadow'>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}

export default Header;
