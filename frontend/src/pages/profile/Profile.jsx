import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsThreeDotsVertical, BsTwitter } from "react-icons/bs";
import "./profile.scss";
import { MdLanguage, MdOutlineMailOutline, MdPlace } from "react-icons/md";
import Posts from "../../components/posts/Posts";
import { useQuery } from "react-query";
import { apiCalls } from "../../axios";
import { useLocation } from "react-router-dom";

const Profile = () => {

  const userId = useLocation().pathname.split("/")[2]

  const { isLoading, error, data } = useQuery(["user"], () =>
    apiCalls.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  console.log(data);

  return (
    <div className="profile">
      <div className="images">
        <img
          src={data.coverPic}
          alt=""
          className="cover"
        />
        <img
          src={data.profilePicture}
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
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <MdPlace />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <MdLanguage />
                <span>{data.website} </span>
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
