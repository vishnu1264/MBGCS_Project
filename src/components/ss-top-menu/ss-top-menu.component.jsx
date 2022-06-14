import "./ss-top-menu.styles.css";

const SsTopMenu = ({onSearchChange}) => {
  return (
    <div className="ss-top-menu d-flex align-items-center justify-content-between">
      <div>
        <b>Service Status</b>
      </div>
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
            placeholder="#Service id, #Customer number, Name"
            onChange={(event)=>onSearchChange(event)}
          ></input>
        </div>
        <select className="mr-2">
          <option value="" default>
            All Executors
          </option>
          <option value="1">E1</option>
          <option value="2">E2</option>
        </select>
        <select className="mr-2">
          <option value="" default>
            All Status
          </option>
          <option value="1">S1</option>
          <option value="2">S2</option>
        </select>
        <input className="date-input" type="text"></input>
        <img src="../../calendar.png" alt="" style={{ height: 30 }} />
      </div>
    </div>
  );
};

export default SsTopMenu;
