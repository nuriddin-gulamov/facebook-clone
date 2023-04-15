import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

function Post({ postData }) {
  return (
    <div className="w-[100%] bg-white rounded-lg shadow-md py-[10px]">
      <PostHeader
        id={postData.id}
        Icon={postData.icon}
        name={postData.name}
        posted={postData.posted}
        pPublic={postData.public}
      />
      <PostBody title={postData.title} image={postData.image} />
      <PostFooter
        likeCount={postData.likeCount}
        commentCount={postData.commentCount}
        shareCount={postData.shareCount}
        liked={postData.liked}
      />
    </div>
  );
}

export default Post;
