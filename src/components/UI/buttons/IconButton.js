function IconButton({ className, Icon, children }) {
    return <button className={`px-[10px] py-[5px] flex items-center w-[100%] hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition duration200 ease ${className}`}>
        <Icon className="text-[22px]" />
        <p className="ml-[10px] text-gray-400 dark:text-gray-300 text-[16px]">{children}</p>
    </button>;
}

export default IconButton;
