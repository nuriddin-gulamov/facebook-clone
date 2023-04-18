function AuthButton({ title, className }) {
  return (
    <button
      className={`w-[100%] h-[55px] bg-primary hover:bg-primary200 text-white rounded-md px-[15p] py-[10px] text-[20px] font-bold transition duration200 ease ${className}`}
    >
      {title}
    </button>
  );
}

export default AuthButton;
