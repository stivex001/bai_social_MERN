import { BsShare } from "react-icons/bs";
import "./post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiCalls } from "../../axios";
import { AuthContext } from "../../context/authContext.jsx";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    apiCalls.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return apiCalls.delete("/likes?postId=" + post.id);
      return apiCalls.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (postId) => {
      return apiCalls.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };


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
          <FiMoreHorizontal onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/" + post.img} alt="img" />
        </div>
        <div className="actions">
          <div className="item">
            {error ? (
              <div style={{ color: "red" }}>Opps!! Something Went Wrong!</div>
            ) : isLoading ? (
              <div style={{ color: "green", fontSize: "30px" }}>
                Loading.........
              </div>
            ) : data?.includes(currentUser.id) ? (
              <MdOutlineFavorite
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <MdOutlineFavoriteBorder onClick={handleLike} />
            )}
            {data?.length} {data?.length > 1 ? "likes" : "like"}
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
