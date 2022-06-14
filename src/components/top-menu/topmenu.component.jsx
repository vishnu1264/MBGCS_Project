import "./topmenu.css";

const TopMenu = ({onSearchChange}) => {
  return (
    <div className="top-menu-component">
      <span>SME Dashboard</span>
      <div className="d-flex">
        <div className="search-box">
          <img
            className="search-icon"
            src="../../searchicon.png"
            alt=""
            style={{ height: 25 }}
          />
          <input
            type="search"
            placeholder="Name, #Service Id, #Customer Number"
            onChange={(event)=>onSearchChange(event)}
          />
        </div>
        <input className="date-input" type="text"></input>
        <img src="../../calendar.png" alt="" style={{ height: 30 }} />
      </div>
    </div>
  );
};

export default TopMenu;
