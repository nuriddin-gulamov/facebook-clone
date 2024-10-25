import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import image from "../../../assets/posts/1.png";

function Post({ postData }) {
    return <div className="w-[100%] bg-white dark:bg-dark-200 dark:text-gray-300 rounded-lg shadow-md py-[10px] mb-[30px]">
        <PostHeader
            id={postData.id}
            avatar={postData.avatar}
            name={postData.user?.name}
            date={postData.date}
        />
        <PostBody
            title={postData.title}
            image={postData.image && image}
        />
        <PostFooter
            postId={postData.id}
            likes={postData.likes}
            comments={postData.comments}
            shares={postData.shares}
        />
    </div>;
}

export default Post;
