function ShareButton({ Icon, title }) {
  return (
    <button className="px-[10px] py-[5px] flex justify-center items-center w-[100%] hover:bg-gray100 rounded-lg transition duration200 ease">
      <Icon className='text-[22px]' />
      <p className="ml-[10px] text-gray350 text-[16px]">{title}</p>
    </button>
  );
}

export default ShareButton;