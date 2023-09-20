import "./navigation_build.scss";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  async function handlelogout() {
    localStorage.clear();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/logout");
      if (res.status === 200) return res.data && navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none"}}>
          <span style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>Chat Application</span>
        </Link>
      
        <Link to="/newsfeed" style={{ textDecoration:"none" }}>
          Browse Users 🔍
        </Link>
      </div>
      <div className="left">
        <div className="user">
          <span style={{ color: "blue", fontSize: "18px" }}>{currentUser.name}</span>
          <RiLogoutCircleLine style={{ color: "red" }} onClick={handlelogout} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
