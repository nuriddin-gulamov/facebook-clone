import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { database } from "./store/firebase";

import LoginScreen from "./components/screens/AuthScreen";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatcher = useDispatch();

  useEffect(() => {
    const postRef = ref(database, "posts");
    let posts = [];
    onValue(
      postRef,
      (snapshot) => {
        const res = snapshot.val();
        posts.push(...res);
        dispatcher({ type: "GET_POSTS", payload: { posts } });
      },
      (error) => console.log(error)
    );
  }, [dispatcher]);

  return <>{isAuthenticated ? <HomeScreen /> : <LoginScreen />}</>;
}

export default App;
