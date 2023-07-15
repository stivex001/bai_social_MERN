import { useContext } from "react";
import { firstData, secondData, thirdData } from "./data";
import "./leftbar.scss";
import { AuthContext } from "../../context/authContext";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="wrapper">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePicture}
              alt=""
            />
            <span>{currentUser.username}</span>
          </div>
          {firstData.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          {secondData.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          {thirdData.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Leftbar;
