function SidebarButton({ Icon, title, index }) {
  return (
    <button
      className={`flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray250 transition duration200 ease ${
        index !== 0 && 'mt-[5px]'
      } `}
    >
      <Icon className="text-[28px] text-primary" />
      <p className="ml-[15px] text-left leading-5">{title}</p>
    </button>
  );
}

export default SidebarButton;
