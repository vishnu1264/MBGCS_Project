import "./sidebar.css";
import { Link } from "react-router-dom";
// const setBg = (val) => {
//   if (val === 1) console.log(document.getElementById("line-1"));
//   else if (val === 2) console.log(document.getElementById("line-2"));
//   else console.log(document.getElementById("line-3"));
// };
const Sidebar = () => {
  return (
    <div className="sidebar-component">
      <Link to="/" id="line-1">
        <span className="mx-3">
          <i className="fa-solid fa-house"></i>
        </span>
        <span>Dashboard</span>
      </Link>
      <Link id="line-2" to="/status">
        <span className="mx-3">
          <i className="fa-solid fa-battery-half"></i>
        </span>
        <span>Service Status</span>
      </Link>
      <Link id="line-3" to="/services">
        <span className="mx-3">
          <i className="fa-solid fa-hand-holding-droplet"></i>
        </span>
        <span>Services</span>
      </Link>
    </div>
  );
};

export default Sidebar;
