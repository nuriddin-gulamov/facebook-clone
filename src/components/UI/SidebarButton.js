function SidebarButton({ Icon, img, children }) {
    return <button className="flex items-center py-[10px] px-[15px] mt-[5px] first:mt-0 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 dark:text-gray-300 transition duration200 ease">
        {
            img
              ? <img src={img} alt="" className="w-[40px] h-[40px] rounded-full" />
              : <Icon className="text-[28px] text-primary" />
        }
        <p className="ml-[15px] text-left leading-5">{children}</p>
    </button>;
}

export default SidebarButton;
