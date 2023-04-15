import { useSelector } from "react-redux";

import Post from "../../UI/Post/Post";

function Posts() {
  const POSTS = useSelector((state) => state.posts);

  return (
    <div className="w-[90%] pt-[35px]">
      {POSTS.map((post) => (
        <Post postData={post} />
      ))}
    </div>
  );
}

export default Posts;
