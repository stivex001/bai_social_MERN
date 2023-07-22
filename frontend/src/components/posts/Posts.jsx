import { apiCalls } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    apiCalls.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error ? (
        <div style={{ color: "red" }}>Opps!! Something Went Wrong!</div>
      ) : isLoading ? (
        <div style={{ color: "green", fontSize: "30px" }}>Loading.........</div>
      ) : (
        data?.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
