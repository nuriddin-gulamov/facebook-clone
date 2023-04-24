import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { database } from "../../store/firebase";
import { ref, onValue } from "firebase/database";

import Header from "../header/Header";
import Main from "../main/Main";

function HomeScreen() {
  // const POSTS = useSelector((state) => state.posts);
  const dispatcher = useDispatch();

  useEffect(() => {
    const postRef = ref(database, "posts");
    onValue(
      postRef,
      (snapshot) => {
        const res = snapshot.val();
        dispatcher({ type: "GET_POSTS", payload: { posts: res } });
      },
      (error) => console.log(error)
    );
  }, [dispatcher]);

  return (
    <div className="min-h-[100vh] bg-gray100">
      <Header />
      <Main />
    </div>
  );
}

export default HomeScreen;
