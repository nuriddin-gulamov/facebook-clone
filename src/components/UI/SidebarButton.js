function SidebarButton({ Icon, title, index }) {
  return (
    <button
      className={`flex items-center py-[10px] px-[15px] rounded-lg hover:bg-gray250 ${index !== 0 && 'mt-[5px]'}`}
    >
      <Icon className="text-[28px] text-primary" />
      <p className="ml-[15px]">{title}</p>
    </button>
  );
}

export default SidebarButton;
