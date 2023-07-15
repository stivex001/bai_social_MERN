import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import { BsFillGrid3X3GapFill, BsFillPersonFill, BsSun } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { darkMode, toggle } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Baiconnect</span>
        </Link>
        <div className="search">
          <AiOutlineSearch />
          <input type="text" placeholder="Search Baiconnect" />
        </div>
      </div>
      <div className="center">
        <AiOutlineHome />
        <BsFillGrid3X3GapFill />
        {darkMode ? (
          <BsSun onClick={toggle} />
        ) : (
          <HiOutlineMoon onClick={toggle} />
        )}
      </div>
      <div className="right">
        <BsFillPersonFill />
        <AiOutlineMessage />
        <MdOutlineNotifications />
        <div className="user">
          <img src={currentUser.profilePicture} alt="" />
          <span>{currentUser.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
