function SidebarButton({ Icon, img, title, index }) {
  let contactBtn = false;

  if (img) {
    contactBtn = true;
  }

  return (
    <button
      className={`flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray250 dark:hover:bg-black300 dark:text-gray300 transition duration200 ease ${
        index !== 0 && "mt-[5px]"
      } `}
    >
      {contactBtn ? (
        <img src={img} alt="" className="w-[40px] h-[40px] rounded-full" />
      ) : (
        <Icon className="text-[28px] text-primary" />
      )}
      <p className="ml-[15px] text-left leading-5">{title}</p>
    </button>
  );
}

export default SidebarButton;
