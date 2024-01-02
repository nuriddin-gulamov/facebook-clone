import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ref, child, get } from "firebase/database";
import { auth, database } from "../../store/firebase";

import Header from "../header/Header";
import Main from "../main/Main";

function HomeScreen() {
  const dispatcher = useDispatch();

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `posts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const posts = snapshot.val();
          dispatcher({
            type: "GET_POSTS",
            payload: { posts, userId: auth.currentUser.uid },
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatcher]);

  return (
    <div className="min-h-[100vh] bg-gray100 dark:bg-black250">
      <Header />
      <div className="2xl:container">
        <Main />
      </div>
    </div>
  );
}

export default HomeScreen;
