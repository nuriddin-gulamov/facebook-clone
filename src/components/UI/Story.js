function Story({ Icon, name, index }) {
  return (
    <div
      className={`flex flex-col justify-between h-[190px] w-[110px] bg-gray250 p-[10px] rounded-lg hover:scale-110 cursor-pointer transition duration-300 ease-in-out shadow-md ${
        index !== 0 && 'ml-[10px]'
      }`}
    >
      <div className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-gray300">
        <Icon className="text-[18px] text-black100" />
      </div>
      <p className="leading-4 text-[16px]">{name}</p>
    </div>
  );
}

export default Story;
