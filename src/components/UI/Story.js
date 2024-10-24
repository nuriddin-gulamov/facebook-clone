function Story({ Icon, img, name }) {
    return <div className="flex flex-col relative justify-center ml-[15px] first:ml-0 h-[190px] w-[110px] max-sm:h-[150px] max-sm:w-[80px] max-[310px]:w-[75px] rounded-lg hover:scale-110 cursor-pointer transition duration-300 ease-in-out shadow-md">
        <div className="relative">
            <img
                src={img}
                alt=""
                className="relative h-[190px] max-sm:h-[150px] w-full object-contain"
            />
            <div className="absolute bg-black/[.35] top-0 left-0 right-0 bottom-0 rounded-lg"></div>
        </div>
        <div className="absolute z-10 top-[10px] left-[10px] h-[35px] w-[35px] max-sm:h-[25px] max-sm:w-[25px] flex justify-center items-center rounded-full bg-gray-300 dark:bg-dark-100">
            <Icon className="text-[18px] max-sm:text-[14px] text-dark-400 dark:text-gray-300" />
        </div>
        <p className="absolute bottom-[10px] left-[10px] leading-4 text-[16px] text-white max-sm:text-[14px]">
            {name}
        </p>
    </div>;
}

export default Story;
