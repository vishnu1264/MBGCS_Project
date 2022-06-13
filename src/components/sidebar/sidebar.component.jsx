import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const setBg = () => {
    const r = 1;
  }
  return (
    <div className="sidebar-component">
      <Link to='/' onClick={setBg} >
        <img src={"../../homeicon.png"} alt="" />
        <span>Dashboard</span>
      </Link>
      <Link to='/status'>
        <img src={"../../status.png"} alt="" />
        <span>Service Status</span>
      </Link>
      <Link to='/services'>
        <img src={"../../service.png"} alt="" />
        <span>Services</span>
      </Link>
    </div>
  );
};

export default Sidebar;
