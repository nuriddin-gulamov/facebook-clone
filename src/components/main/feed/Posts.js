import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get, child, ref } from "firebase/database";
import { database } from "../../../store/firebase";

import Post from "../../UI/post/Post";

function Posts() {
    const dispatcher = useDispatch();

    useEffect(() => {
        const fetchPosts = async function () {
            const snapshot = await get(child(ref(database), "posts"));
            if (snapshot.exists()) {
                dispatcher({
                    type: "FETCH_POSTS",
                    payload: { posts: snapshot.val() }
                });
            }
        };

        fetchPosts();
    }, [dispatcher]);

    const POSTS = useSelector(state => state.posts);

    return <div className="w-[90%] max-[310px]:w-[95%] pt-[35px]">
        {POSTS.map((post, i) => <Post postData={post} key={i} />)}
    </div>;
}

export default Posts;
