import { BsShare } from "react-icons/bs";
import "./post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfos">
            <img src={post.profilePicture} alt="" />
            <div className="desc">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>{post.name}</p>
              </Link>
              <span>{post.created_at} </span>
            </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/" + post.img} alt="img" />
        </div>
        <div className="actions">
          <div className="item">
            {liked ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            12 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <AiOutlineMessage />5 Comments
          </div>
          <div className="item">
            <BsShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
