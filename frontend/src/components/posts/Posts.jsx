import Post from "../post/Post";
import "./posts.scss";

const posts = [
  {
    id: 1,
    name: "Post 1",
    userId: 123,
    img:
      "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is the first post.",
  },
  {
    id: 2,
    name: "Post 2",
    userId: 456,
    img:
      "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Check out this amazing photo!",
  },
  {
    id: 3,
    name: "Post 3",
    userId: 789,
    img:
      "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sharing some thoughts on a recent trip.",
  },
  {
    id: 4,
    name: "Post 4",
    userId: 123,
    img:
      "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Exciting news to share!",
  },
  {
    id: 5,
    name: "Post 5",
    userId: 456,
    img:
      "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Looking for recommendations on books.",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
