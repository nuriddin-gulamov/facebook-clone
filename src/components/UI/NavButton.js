function NavButton({ Icon, activeBtn, index }) {
  return (
    <button
      className={`h-[56px] w-[110px] flex justify-center items-center ${
        index !== 0 && 'ml-[10px]'
      } ${activeBtn === index && 'border-b-[3px] border-primary'} ${
        activeBtn !== index && 'hover:bg-gray100 rounded-lg h-[48px]'
      }`}
    >
      <Icon
        className={`text-[28px] ${
          activeBtn === index ? 'text-primary' : 'text-gray400'
        }`}
      />
    </button>
  );
}

export default NavButton;
