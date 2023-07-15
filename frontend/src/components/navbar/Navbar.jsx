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
          <AiOutlineSearch size={25} />
          <input type="text" placeholder="Search Baiconnect" />
        </div>
      </div>
      <div className="center">
        <AiOutlineHome size={25} />
        <BsFillGrid3X3GapFill size={25} />
        {darkMode ? (
          <BsSun size={25} onClick={toggle} />
        ) : (
          <HiOutlineMoon size={25} onClick={toggle} />
        )}
      </div>
      <div className="right">
        <BsFillPersonFill size={25} />
        <AiOutlineMessage size={25} />
        <MdOutlineNotifications size={25} />
        <div className="user">
          <img src={currentUser.profilePicture} alt="" />
          <span>{currentUser.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
