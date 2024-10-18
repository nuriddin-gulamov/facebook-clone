import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import post from "../../../assets/posts/1.png";
import nuriddin from "../../../assets/posts/avatars/1.png";

function Post({ postData }) {
    return <div className="w-[100%] bg-white dark:bg-dark-200 dark:text-gray-300 rounded-lg shadow-md py-[10px] mb-[30px]">
        <PostHeader
            id={postData.id}
            Icon={postData.icon === "user" && nuriddin}
            name={postData.name}
            posted={postData.posted}
            postPublic={postData.public}
        />
        <PostBody
            title={postData.title}
            image={postData.image === "post" && post}
        />
        <PostFooter
            likeCount={postData.likedBy.length}
            commentCount={postData.commentCount}
            shareCount={postData.shareCount}
            liked={postData.liked}
            postId={postData.id}
        />
    </div>;
}

export default Post;
