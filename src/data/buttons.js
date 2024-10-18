import { AiFillHome, AiFillShop } from "react-icons/ai";
import { FaUserFriends, FaBell, FaUser, FaLeaf } from "react-icons/fa";
import { RiMovieFill, RiShareForwardLine } from "react-icons/ri";
import { MdGroups, MdFeedback } from "react-icons/md";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";
import { SiFacebookgaming } from "react-icons/si";
import { BiComment } from "react-icons/bi";
import {
    FcAlarmClock,
    FcConferenceCall,
    FcShop,
    FcClapperboard,
    FcOvertime,
    FcBookmark,
    FcDocument,
    FcCalendar,
    FcRating,
    FcAdvertising,
    FcBarChart,
    FcLike,
    FcVideoCall,
    FcTodoList,
    FcSmartphoneTablet,
    FcMms,
    FcStart,
    FcGallery
} from "react-icons/fc";

export const NAV_BUTTONS = [
  { icon: AiFillHome },
  { icon: FaUserFriends },
  { icon: RiMovieFill },
  { icon: AiFillShop },
  { icon: MdGroups }
];

export const HEADER_RIGHT_BUTTONS = [
  { icon: BsFillGrid3X3GapFill },
  { icon: BsMessenger },
  { icon: FaBell }
];

export const SIDEBAR_BUTTONS = [
  { icon: FaUser, title: "Gulamov Nuriddin" },
  { icon: FaUserFriends, title: "Find Friends" },
  { icon: FcAlarmClock, title: "Most Recent" },
  { icon: FcConferenceCall, title: "Groups" },
  { icon: FcShop, title: "Marketplace" },
  { icon: FcClapperboard, title: "Watch" },
  { icon: FcOvertime, title: "Memories" },
  { icon: FcBookmark, title: "Saved" },
  { icon: FcDocument, title: "Pages" },
  { icon: FcCalendar, title: "Events" },
  { icon: FcRating, title: "Favorites" }
];

export const SIDEBAR_MORE_BUTTONS = [
  { icon: FcAdvertising, title: "Ad Center" },
  { icon: FcBarChart, title: "Ads Manager" },
  { icon: FaLeaf, title: "Climate Science Center" },
  { icon: MdFeedback, title: "Crisis Response" },
  { icon: FcLike, title: "Fundraisers" },
  { icon: SiFacebookgaming, title: "Gaming Video" },
  { icon: FcVideoCall, title: "Live Videos" },
  { icon: BsMessenger, title: "Messenger" },
  { icon: FcTodoList, title: "Orders and Payments" },
  { icon: FcSmartphoneTablet, title: "Play Games" },
  { icon: FcMms, title: "Recent and activity" }
];

export const SHARE_BUTTONS = [
  { icon: FcStart, title: "Live Video" },
  { icon: FcGallery, title: "Photo/Video" },
  { icon: FcLike, title: "Feeling/Activity" }
];

export const POST_BUTTONS = [
  { icon: BiComment, title: "Comment" },
  { icon: RiShareForwardLine, title: "Share" }
];
