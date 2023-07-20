import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext.jsx";
import { useMutation, useQuery, useQueryClient } from "react-query";
import moment from "moment";
import { apiCalls } from "../../axios";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const { isLoading, error, data } = useQuery(["comments"], () =>
    apiCalls.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (newComment) => {
      return apiCalls.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input
          type="text"
          placeholder="Write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error ? (
        <div style={{ color: "red" }}>Opps!! Something Went Wrong!</div>
      ) : isLoading ? (
        <div style={{ color: "green", fontSize: "30px" }}>Loading.........</div>
      ) : (
        data?.map((comment) => (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
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
