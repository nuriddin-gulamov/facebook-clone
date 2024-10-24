import { auth } from '../../../store/firebase';
import { FaUser } from "react-icons/fa";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import post from "../../../assets/posts/1.png";
import nuriddin from "../../../assets/posts/avatars/1.png";

function Post({ postData }) {
    return <div className="w-[100%] bg-white dark:bg-dark-200 dark:text-gray-300 rounded-lg shadow-md py-[10px] mb-[30px]">
        <PostHeader
            id={postData.id}
            Icon={postData.avatar === "user" ? FaUser : nuriddin}
            name={postData.name}
            posted={postData.posted}
            postPublic={postData.public}
        />
        <PostBody
            title={postData.title}
            image={postData.image === "post" && post}
        />
        <PostFooter
            likeCount={postData.likes ? postData.likes.length : 0}
            comments={postData.comments}
            shareCount={postData.shareCount}
            liked={postData.likes?.includes(auth.currentUser.uid)}
            postId={postData.id}
        />
    </div>;
}

export default Post;
