import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function PostComments({ postId, comments }) {
    const [enteredComment, setEnteredComment] = useState('');
    const [validationError, setValidationError] = useState(false);

    const dispatcher = useDispatch();

    function enteredCommentHandler(e) {
        setValidationError(false);
        setEnteredComment(e.target.value);
    }

    async function commentHandler(e) {
        e.preventDefault();
        if (enteredComment.trim().length === 0) setValidationError(true);
        else {
            setValidationError(false);
            dispatcher({
                type: "HANDLE_POST_COMMENT",
                payload: { comment: enteredComment, postId }
            });
            setEnteredComment('');
        }
    }

    return <div className={`${comments && 'pt-[10px]'} mt-[5px] border-t border-gray-300 dark:border-dark-100 flex flex-col gap-[15px] relative max-h-[400px] overflow-y-scroll`}>
        {comments?.map(item => (
            <div className="flex gap-[5px]">
                <div>
                    <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-gray-100 dark:bg-dark-100"><FaUser/></div>
                </div>
                <div>
                    <div className="py-2 px-3 rounded-[18px] bg-gray-100 dark:bg-dark-100">
                        <p className="text-[13px] font-semibold leading-none">{item.user.name}</p>
                        <p className="text-[15px] leading-none mt-1.5">{item.comment}</p>
                    </div>
                    <p className="text-gray-400 text-[13px] font-medium px-3">{moment(item.date).fromNow()}</p>
                </div>
            </div>
        ))}
        <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-dark-200 pt-2.5">
            <form onSubmit={commentHandler} className="flex gap-[5px]">
                <div><div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-gray-100 dark:bg-dark-100"><FaUser/></div></div>
                <input onChange={enteredCommentHandler} type="text" placeholder="Write comment..." value={enteredComment} className={`h-[32px] px-3 rounded-[18px] w-full bg-gray-100 dark:bg-dark-100 text-[15px] leading-none outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300 ${validationError && 'border border-red'}`}/>
                <div><button type="submit" className="w-[32px] h-[32px] rounded-full flex justify-center items-center transition bg-gray-100 dark:bg-dark-100 hover:bg-gray-200"><IoSend /></button></div>
            </form>
        </div>
    </div>;
}

export default PostComments;