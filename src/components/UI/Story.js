function Story({ Icon, imgName, name, index }) {
  return (
    <div
      className={`flex flex-col justify-between bg-${imgName} h-[190px] w-[110px] max-sm:h-[150px] max-sm:w-[80px] p-[10px] rounded-lg hover:scale-110 cursor-pointer transition duration-300 ease-in-out shadow-md ${
        index !== 0 && "ml-[15px]"
      }`}
    >
      <div className="h-[35px] w-[35px] max-sm:h-[25px] max-sm:w-[25px] flex justify-center items-center rounded-full bg-gray300">
        <Icon className="text-[18px] max-sm:text-[14px] text-black100" />
      </div>
      <p className="leading-4 text-[16px] max-sm:text-[14px]">{name}</p>
    </div>
  );
}

export default Story;
