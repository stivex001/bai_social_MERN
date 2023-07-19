import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext.jsx";
import { useQuery } from "react-query";
import moment from "moment";
import { apiCalls } from "../../axios";

// const comments = [
//   {
//     id: 1,
//     desc: "Great post!",
//     name: "John",
//     userId: 123,
//     profilePic:
//       "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     desc: "I love this picture!",
//     name: "Jane",
//     userId: 456,
//     profilePic:
//       "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     desc: "Looks like an amazing trip.",
//     name: "Sarah",
//     userId: 789,
//     profilePic:
//       "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 4,
//     desc: "Congratulations",
//     name: "John",
//     userId: 123,
//     profilePic:
//       "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 5,
//     desc: "Here are some book recommendations.",
//     name: "Jane",
//     userId: 456,
//     profilePic:
//       "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    apiCalls.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {error ? (
        <div style={{ color: "red" }}>Opps!! Something Went Wrong!</div>
      ) : isLoading ? (
        <div style={{ color: "green", fontSize: "30px" }}>Loading.........</div>
      ) : (
        data.map((comment) => (
          <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name} </span>
              <p>{comment.desc} </p>
            </div>
            <span className="date">
              {moment(comment.created_at).fromNow()}{" "}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
