import "./topmenu.css";
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
const TopMenu = () => {
  // const handleSelect = (ranges) => {
  //   console.log(ranges);
  // }
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }
  return (
    <div className="top-menu-component">
      <span>SME Dashboard</span>
      {/* <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
      /> */}
      <div className="d-flex">
        <div className="search-box">
          <img
            className="search-icon"
            src="../../searchicon.png"
            alt=""
            style={{ height: 25 }}
          />
          <input type="search"></input>
        </div>
        <input className="date-input" type="text"></input>
        <img src="../../calendar.png" alt="" style={{ height: 30 }} />
        
      </div>
    </div>
  );
};

export default TopMenu;
