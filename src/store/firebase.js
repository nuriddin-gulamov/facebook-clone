import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "facebook-clone-n.firebaseapp.com",
  projectId: "facebook-clone-n",
  storageBucket: "facebook-clone-n.appspot.com",
  messagingSenderId: process.env.REACT_APP_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
