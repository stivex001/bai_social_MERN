import { BsShare } from "react-icons/bs";
import "./post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

const Post = ({ post }) => {
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="" />
            <div className="desc">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>{post.name}</p>
              </Link>
              <span>a few seconds ago</span>
            </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className="content">
          <p>{post.description}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="actions">
          <div className="item">
            {liked ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            12 likes
          </div>
          <div className="item">
            <AiOutlineMessage />5 Comments
          </div>
          <div className="item">
            <BsShare />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
