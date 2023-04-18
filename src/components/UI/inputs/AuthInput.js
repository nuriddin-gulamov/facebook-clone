function AuthInput({ placeholder, className, onChange }) {
  return (
    <input
      placeholder={placeholder}
      className={`px-[15px] py-[10px] w-[100%] text-[18px] border-[1px] text-black100 rounded-md outline-offset-2 outline-primary ${className}`}
      onChange={onChange}
    />
  );
}

export default AuthInput;
