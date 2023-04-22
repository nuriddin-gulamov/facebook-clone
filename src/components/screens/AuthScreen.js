import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import AuthInput from "../UI/inputs/AuthInput";
import AuthButton from "../UI/buttons/AuthButton";
import facebook from "../../assets/facebook.svg";
import { auth } from "../../store/firebase";

function LoginScreen() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const [credentialWarnings, setCredentialWarnings] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const dispatcher = useDispatch();

  function handleEmailInputChange(event) {
    setEnteredEmail(event.target.value);
    setCredentialWarnings(false);
  }

  function handlePasswordInputChange(event) {
    setEnteredPassword(event.target.value);
    setCredentialWarnings(false);
  }

  function handleSignUpToggle() {
    setIsSignUp(!isSignUp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setWrongCredentials(false);

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setCredentialWarnings(true);
    } else {
      setCredentialWarnings(false);
    }

    try {
      if (isSignUp) {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        const user = userCredentials.user;
        const token = user.getIdToken();

        if (token) {
          dispatcher({ type: "AUTHENTICATE" });
        }
      } else {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        const user = userCredentials.user;
        const token = user.getIdToken();

        if (token) {
          dispatcher({ type: "AUTHENTICATE" });
        }
      }
    } catch (error) {
      console.error(error.message);
      dispatcher({ type: "UNAUTHENTICATE" });
      setCredentialWarnings(true);
      setWrongCredentials(true);
    }
  }

  return (
    <div className="min-h-[100vh] px-[35px] py-[25px] bg-gray100 flex max-lg:flex-col max-lg:justify-center justify-around items-center">
      <div className="lg:min-h-[350px]">
        <img
          src={facebook}
          alt="Facebook Clone"
          className="w-[200px] h-[70px]"
        />
        <div className="px-[22px] max-[310px]:px-[5px]">
          <h1 className="text-[30px] max-[310px]:text-[25px] max-[310px]:text-center">
            Facebook - Clone
          </h1>
          <p className="mt-[20px]">
            This is a Facebook Clone Project built by Nuriddin Gulamov. <br />{" "}
            Only the use of this project is allowed, <br /> please do not claim
            it as your own or use for portfolio.
          </p>
        </div>
      </div>
      <div className="min-w-[400px] max-sm:min-w-[300px] max-[310px]:min-w-[250px] min-h-[400px] bg-white rounded-lg shadow-lg max-lg:mt-[25px] p-[20px]">
        <form onSubmit={handleSubmit}>
          <AuthInput
            placeholder="Email"
            onChange={handleEmailInputChange}
            className={
              credentialWarnings
                ? "border-red outline-0"
                : "border-gray300 outline-1"
            }
          />
          <AuthInput
            placeholder="Password"
            className={`mt-[15px] ${
              credentialWarnings
                ? "border-red outline-0"
                : "border-gray300 outline-1"
            }`}
            onChange={handlePasswordInputChange}
          />
          <p
            className={`text-red mt-[5px] text-[15px] text-center ${
              wrongCredentials ? null : "hidden"
            }`}
          >
            Wrong email or password, please check your credentials or try again
            later.
          </p>
          <AuthButton
            title={isSignUp ? "Sign Up" : "Log In"}
            type="submit"
            className="mt-[15px]"
          />
          <div className="mt-[15px] flex justify-center">
            <a
              href="/"
              className="text-primary text-[16px] hover:underline cursor-pointer"
            >
              Forgot your password?
            </a>
          </div>
          <div className="pt-[35px] mt-[20px] border-t-[1px] border-gray300 flex justify-center">
            <button
              onClick={handleSignUpToggle}
              className="min-w-[60%] min-h-[55px] bg-green hover:bg-green200 text-white rounded-md px-[15px] py-[10px] text-[18px] font-bold transition duration200 ease"
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
