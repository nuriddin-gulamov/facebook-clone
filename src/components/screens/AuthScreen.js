import { useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import AuthInput from "../UI/inputs/AuthInput";
import AuthButton from "../UI/buttons/AuthButton";

const firebaseConfig = {
  apiKey: "AIzaSyDb7hMtwS7d8zKy9DL9hbOAdM8SfD1ryH4",
  authDomain: "facebook-clone-n.firebaseapp.com",
  projectId: "facebook-clone-n",
  storageBucket: "facebook-clone-n.appspot.com",
  messagingSenderId: "1030920978955",
  appId: "1:1030920978955:web:193c302ebf6f51a2fffd0e",
};

firebase.initializeApp(firebaseConfig);

function LoginScreen() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatcher = useDispatch();

  function handleEmailInputChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordInputChange(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSignUpToggle() {
    setIsSignUp(!isSignUp);
  }

  const handleSubmit = async function (event) {
    event.preventDefault();

    try {
      if (isSignUp) {
        // Sign up new user
        await firebase
          .auth()
          .createUserWithEmailAndPassword(enteredEmail, enteredPassword);

        dispatcher({ type: "AUTHENTICATE" });
      } else {
        // Log in existing user
        await firebase
          .auth()
          .signInWithEmailAndPassword(enteredEmail, enteredPassword);

        dispatcher({ type: "AUTHENTICATE" });
      }
    } catch (error) {
      console.error(error.message);
      
      dispatcher({ type: "UNAUTHENTICATE" });
    }
  };

  return (
    <div className="h-[100vh] bg-gray100 flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-md p-[20px]">
        <form onSubmit={handleSubmit}>
          <AuthInput placeholder="Email" onChange={handleEmailInputChange} />
          <AuthInput
            placeholder="Password"
            className="mt-[15px]"
            onChange={handlePasswordInputChange}
          />
          <AuthButton
            title={isSignUp ? "Sign Up" : "Log In"}
            type="submit"
            className="mt-[15px]"
          />
          <div className="mt-[15px] flex justify-center">
            <a className="text-primary text-[16px] hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="pt-[35px] mt-[20px] border-t-[1px] border-gray300 flex justify-center">
            <button
              onClick={handleSignUpToggle}
              className="w-[60%] h-[55px] bg-green hover:bg-green200 text-white rounded-md px-[15p] py-[10px] text-[18px] font-bold transition duration200 ease"
            >
              {isSignUp ? "Log In instead" : "Create new account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
