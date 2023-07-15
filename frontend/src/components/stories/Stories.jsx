import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const stories = [
  {
    id: 1,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Stephen Adeyemo",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories-container">
      <div className="stories">
        <div className="story">
          <img src={currentUser.profilePicture} alt="" />
          <span>{currentUser.username}</span>
          <button>+</button>
        </div>
        {stories.map((story) => (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
