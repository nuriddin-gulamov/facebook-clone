import { FaUser } from "react-icons/fa";
import post from "../../../assets/post.png";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

function Post({ postData }) {
  return (
    <div className="w-[100%] bg-white rounded-lg shadow-md py-[10px]">
      <PostHeader
        id={postData.id}
        Icon={postData.icon === "user" && FaUser}
        name={postData.name}
        posted={postData.posted}
        pPublic={postData.public}
      />
      <PostBody
        title={postData.title}
        image={postData.image === "post" && post}
      />
      <PostFooter
        likeCount={postData.likeCount}
        commentCount={postData.commentCount}
        shareCount={postData.shareCount}
        liked={postData.liked}
        postId={postData.id}
      />
    </div>
  );
}

export default Post;
