import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsThreeDotsVertical, BsTwitter } from "react-icons/bs";
import "./profile.scss";
import { MdLanguage, MdOutlineMailOutline, MdPlace } from "react-icons/md";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/3102911/pexels-photo-3102911.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/3770258/pexels-photo-3770258.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://web.facebook.com/">
              <BsFacebook size={30} />
            </a>
            <a href="https://web.facebook.com/">
              <BsInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/adeyemostephen/">
              <BsLinkedin size={30} />
            </a>
            <a href="https://twitter.com/Baistevoo">
              <BsTwitter size={30} />
            </a>
            <a href="https://github.com/stivex001">
              <BsGithub size={30} />
            </a>
          </div>
          <div className="center">
            <span>Stephen Adeyemo</span>
            <div className="info">
              <div className="item">
                <MdPlace />
                <span>Nigeria</span>
              </div>
              <div className="item">
                <MdLanguage />
                <span>bai.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <MdOutlineMailOutline />
            <BsThreeDotsVertical />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
