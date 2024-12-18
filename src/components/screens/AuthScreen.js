import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import full from "../../assets/logos/full.svg";
import { auth } from "../../store/firebase";

function AuthScreen() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const [credentialWarnings, setCredentialWarnings] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatcher = useDispatch();

  function handleEmailInputChange(event) {
      setEnteredEmail(event.target.value);
      setCredentialWarnings(false);
      setWrongCredentials(false);
  }

  function handlePasswordInputChange(event) {
      setEnteredPassword(event.target.value);
      setCredentialWarnings(false);
      setWrongCredentials(false);
  }

  function handleSignUpToggle() {
      setIsSignUp(!isSignUp);
  }

  async function handleSubmit(event) {
      event.preventDefault();

      setWrongCredentials(false);
      setErrorMessage("");

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

              if (token) dispatcher({ type: "AUTHENTICATE" });
          } else {
              const userCredentials = await signInWithEmailAndPassword(
                  auth,
                  enteredEmail,
                  enteredPassword
              );
              const user = userCredentials.user;
              const token = user.getIdToken();

              if (token) dispatcher({ type: "AUTHENTICATE" });
          }
      } catch (error) {
          switch (error.code) {
              case "auth/network-request-failed":
                  setErrorMessage("Your internet connection is not stable, please try again");
                  break;

              case "auth/wrong-password":
                  setErrorMessage("Your password is incorrect");
                  break;

              case "auth/email-already-in-use":
                  setErrorMessage("User with this email already exists.");
                  break;

              default:
                  setErrorMessage("An unknown error occured");
          }
          dispatcher({ type: "UNAUTHENTICATE" });
          setCredentialWarnings(true);
          setWrongCredentials(true);
      }
  }

  return <div className="bg-gray-100">
      <div className="min-h-[100vh] max-w-[1000px] mx-auto max-sm:px-[35px] py-[25px] flex items-center max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:gap-[25px]">
          <div className="lg:w-[60%]">
              <img src={full} alt="Facebook Clone" className="w-[200px] h-[70px] max-lg:mx-auto" />
              <div className="lg:pl-[22px]">
                  <h1 className="text-[30px] max-[310px]:text-[25px]">Facebook - Clone</h1>
                  <p className="mt-[20px]">
                      This is a Facebook Clone Project built by Nuriddin Gulamov.{" "}
                      <br className="max-sm:hidden" /> Only the use of this project is
                      allowed, <br className="max-sm:hidden" /> please do not claim it as
                      your own or use for portfolio.
                  </p>
              </div>
          </div>
          <div className="lg:w-[40%] bg-white rounded-lg shadow-lg p-[20px]">
              <form onSubmit={handleSubmit}>
                  <input
                      type="email"
                      placeholder="Email"
                      onChange={handleEmailInputChange}
                      className={`px-[15px] py-[10px] w-[100%] text-[18px] border-[1px] text-dark-400 rounded-md outline-offset-2 outline-primary ${
                          credentialWarnings
                              ? "border-red outline-0"
                              : "border-gray-300 outline-1"
                      }`}
                  />
                  <input
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordInputChange}
                      className={`mt-[15px] px-[15px] py-[10px] w-[100%] text-[18px] border-[1px] text-dark-400 rounded-md outline-offset-2 outline-primary ${
                          credentialWarnings
                              ? "border-red outline-0"
                              : "border-gray-300 outline-1"
                      }`}
                  />
                  {wrongCredentials && <p className="text-red mt-[5px] text-[15px] text-center">{errorMessage}</p>}
                  <button type="submit" className="mt-[15px] w-[100%] h-[55px] bg-primary hover:bg-[#145fbb] text-white rounded-md px-[15p] py-[10px] text-[20px] font-bold transition duration200 ease">
                      {isSignUp ? "Sign Up" : "Log In"}
                  </button>
                  <a href="/" className="pointer-events-none mt-[15px] text-primary text-[16px] hover:underline cursor-pointer block w-fit mx-auto">
                      Forgot your password?
                  </a>
                  <div className="pt-[15px] mt-[20px] border-t border-gray-300 flex justify-center">
                      <button
                          onClick={handleSignUpToggle}
                          type="button"
                          className="min-w-[60%] min-h-[55px] bg-[#3ebb25] hover:bg-[#35a420] text-white rounded-md px-[15px] py-[10px] text-[18px] font-bold transition duration200 ease"
                      >
                          {isSignUp ? "Log In instead" : "Create new account"}
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </div>;
}

export default AuthScreen;
