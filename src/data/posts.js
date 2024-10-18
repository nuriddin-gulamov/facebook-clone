import { FaUser } from "react-icons/fa";
import post from "../assets/post.png";

const POSTS = [
    {
        id: Math.random().toString(16).slice(2),
        icon: FaUser,
        name: "Nuriddin Gulamov",
        posted: "3d",
        public: true,
        title: "This is a facebook clone post...",
        image: post,
        likeCount: 0,
        commentCount: 0,
        shareCount: 0,
        liked: false
    }
];

export default POSTS;
