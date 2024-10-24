import { useState } from 'react';
import { useDispatch } from "react-redux";
import { BiLike, BiComment, BiSolidComment } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

import PostComments from "./PostComments";

function PostFooter({ likeCount, comments, shareCount, liked, postId }) {
    const [commentsOpened, setCommentsOpened] = useState(false);

    const dispatcher = useDispatch();

    let LikeIcon = liked ? AiFillLike : BiLike;
    const CommentIcon = commentsOpened ? BiSolidComment : BiComment;

    function likeHandler() {
        dispatcher({
            type: "HANDLE_POST_LIKE",
            payload: { postId }
        });
    }

    return <div className="px-[10px]">
        <div className="flex justify-between items-center py-[10px]">
            <div className="flex items-center cursor-pointer">
                <BiLike />
                <p className="ml-[5px]">{likeCount}</p>
            </div>
            <div className="flex items-center text-gray-400 dark:text-gray-300 cursor-pointer">
                <p onClick={() => setCommentsOpened(!commentsOpened)}>
                    {comments ? comments.length : 0} comments
                </p>
                <p className="ml-[10px]">{shareCount} shares</p>
            </div>
        </div>
        <div className="flex max-[310px]:flex-col items-center border-t border-gray-300 dark:border-dark-100 pt-[5px]">
            <button
                onClick={likeHandler}
                className="px-[10px] py-[5px] flex justify-center max-[310px]:justify-start items-center w-[100%] hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition duration200 ease"
            >
                <LikeIcon className="text-[22px]"/>
                <p className="ml-[10px] text-gray-400 dark:text-gray-300 text-[16px]">Like</p>
            </button>
            <button
                onClick={() => setCommentsOpened(!commentsOpened)}
                className="px-[10px] py-[5px] flex justify-center max-[310px]:justify-start items-center w-[100%] hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition duration200 ease"
            >
                <CommentIcon className="text-[22px]"/>
                <p className="ml-[10px] text-gray-400 dark:text-gray-300 text-[16px]">Comment</p>
            </button>
            <button className="px-[10px] py-[5px] flex justify-center max-[310px]:justify-start items-center w-[100%] hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition duration200 ease">
                <RiShareForwardLine className="text-[22px]"/>
                <p className="ml-[10px] text-gray-400 dark:text-gray-300 text-[16px]">Share</p>
            </button>
        </div>
        {commentsOpened && <PostComments postId={postId} comments={comments} />}
    </div>;
}

export default PostFooter;
