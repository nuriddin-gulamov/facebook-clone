function ShareButton({ Icon, title, className }) {
  return (
    <button
      className={`px-[10px] py-[5px] flex items-center w-[100%] hover:bg-gray100 rounded-lg transition duration200 ease ${className}`}
    >
      <Icon className="text-[22px]" />
      <p className="ml-[10px] text-gray350 text-[16px]">{title}</p>
    </button>
  );
}

export default ShareButton;
