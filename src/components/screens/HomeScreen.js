// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { database } from "../../store/firebase";
// import { ref, onValue } from "firebase/database";

import Header from "../header/Header";
import Main from "../main/Main";

function HomeScreen() {
  // const POSTS = useSelector((state) => state.posts);
  // const dispatcher = useDispatch();

  // console.log(POSTS);

  // useEffect(() => {
  //   const postsRef = ref(database, "posts");
  //   onValue(postsRef, (snapshot) => {
  //     const posts = [];
  //     snapshot.forEach((childSnapshot) => {
  //       const post = childSnapshot.val();
  //       posts.push(post);
  //     });
  //     console.log(posts);
  //     dispatcher({ type: "GET_POSTS", payload: { posts } });
  //   });
  // }, [dispatcher]);

  return (
    <div className="min-h-[100vh] bg-gray100">
      <Header />
      <Main />
    </div>
  );
}

export default HomeScreen;
