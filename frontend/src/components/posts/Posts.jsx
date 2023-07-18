import { apiCalls } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";

// const posts = [
//   {
//     id: 1,
//     name: "Stephen Adeyemo",
//     userId: 123,
//     img: "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "This is the first post.",
//   },
//   {
//     id: 2,
//     name: "Stephen Adeyemo",
//     userId: 456,
//     img: "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "Check out this amazing photo!",
//   },
//   {
//     id: 3,
//     name: "Stephen Adeyemo",
//     userId: 789,
//     img: "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "Sharing some thoughts on a recent trip.",
//   },
//   {
//     id: 4,
//     name: "Stephen Adeyemo",
//     userId: 123,
//     img: "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "Exciting news to share!",
//   },
//   {
//     id: 5,
//     name: "Stephen Adeyemo",
//     userId: 456,
//     img: "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "Looking for recommendations on books.",
//   },
// ];

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    apiCalls.get("/posts").then((res) => {
      return res.data;
    })
  );
  console.log(data);
  return (
    <div className="posts">
      {data?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
