import PostHeader from "./PostHeader";

function Post({ postData }) {
  return (
    <div className="w-[100%] bg-white rounded-lg shadow-md py-[10px] px-[10px]">
      <PostHeader
        Icon={postData.icon}
        name={postData.name}
        posted={postData.posted}
        pPublic={postData.public}
      />
    </div>
  );
}

export default Post;
