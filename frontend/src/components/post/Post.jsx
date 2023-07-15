import "./post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="user">
        <div className="userInfo">
          <img src={post.img} alt="" />
          <div className="desc">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>{post.name}</p>
              <span>a few seconds ago</span>
            </Link>
          </div>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Post;
