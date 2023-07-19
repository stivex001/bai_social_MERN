import { BsShare } from "react-icons/bs";
import "./post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useQuery } from "react-query";
import { apiCalls } from "../../axios";
import { AuthContext } from "../../context/authContext.jsx";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    apiCalls.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );


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
              <span>{moment(post.created_at).fromNow()} </span>
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
            {data.includes(currentUser.id) ? <MdOutlineFavorite style={{color: "red"}} /> : <MdOutlineFavoriteBorder />}
            {data?.length} likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <AiOutlineMessage />5 Comments
          </div>
          <div className="item">
            <BsShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
