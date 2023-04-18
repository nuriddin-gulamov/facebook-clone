function AuthInput({ placeholder, className, onChange }) {
  return (
    <input
      placeholder={placeholder}
      className={`px-[15px] py-[10px] w-[100%] text-[18px] border-[1px] border-gray300 text-black100 rounded-md outline-1 outline-offset-2 outline-primary ${className}`}
      onChange={onChange}
    />
  );
}

export default AuthInput;
