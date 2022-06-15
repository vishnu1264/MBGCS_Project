import "./topmenu.css";

const TopMenu = ({onSearchChange}) => {
  return (
    <div className="top-menu-component d-flex align-items-center">
      <h4>SME Dashboard</h4>
      <div className="d-flex align-items-center">
        <div className="search-box">
          <img
            className="search-icon ml-2 mr-1"
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
        <span class='mr-2'>From:</span>
        <input className="date-input" type="date"></input>
        <span class='mr-2'>To:</span>
        <input className="date-input" type="date"></input>
        {/* <img src="../../calendar.png" alt="" style={{ height: 30 }} /> */}
      </div>
    </div>
  );
};

export default TopMenu;
