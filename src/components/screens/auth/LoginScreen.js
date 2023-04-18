import { useState } from "react";

import AuthInput from "../../UI/inputs/AuthInput";
import AuthButton from "../../UI/buttons/AuthButton";

function LoginScreen() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  console.log(enteredEmail, enteredPassword);

  function handleEmailInputChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordInputChange(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <div className="h-[100vh] bg-gray100 flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-md p-[20px]">
        <AuthInput placeholder="Email" onChange={handleEmailInputChange} />
        <AuthInput
          placeholder="Password"
          className="mt-[15px]"
          onChange={handlePasswordInputChange}
        />
        <AuthButton title="Log In" className="mt-[15px]" />
        <div className="mt-[15px] flex justify-center">
          <a href="#" className="text-primary text-[16px] hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="pt-[35px] mt-[20px] border-t-[1px] border-gray300 flex justify-center">
          <button className="w-[60%] h-[55px] bg-green hover:bg-green200 text-white rounded-md px-[15p] py-[10px] text-[18px] font-bold transition duration200 ease">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
