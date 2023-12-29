import { useSelector } from "react-redux";

import Post from "../../UI/Post/Post";

function Posts() {
  const POSTS = useSelector((state) => state.posts);

  return (
    <div className="w-[90%] max-[310px]:w-[95%] pt-[35px]">
      {POSTS.map((post, index) => (
        <Post postData={post} key={index} />
      ))}
    </div>
  );
}

export default Posts;
