import { firstData, secondData, thirdData } from "./data";
import "./leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="wrapper">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>Stephen Adeyemo</span>
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
