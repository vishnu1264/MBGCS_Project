import "./service-status.styles.css";
import { Link } from "react-router-dom";

const ServiceStatusComponent = 
({id, servicetype, name, date, time, reviewer, rdate, rtime}) => {
  return (
    <Link to='/status/form' key={id} className="d-flex justify-content-between ss-card-item">
      <div className="d-flex">
          <img style={{height:50}} src='../../man.png' alt=''/>
          <div className="d-flex flex-column">
            <span>{servicetype}</span>
            <span>{name}</span>
          </div>
      </div>
      <div className="d-flex flex-column">
          <span>Check List to be submitted</span>
          <div className="d-flex">
            <img className="mr-2" style={{height:20}} src='../../calendar.png' alt='' />
            <span className="mr-2">{date}</span>
            <span>{time}</span>
          </div>
      </div>
      <div className="d-flex flex-column mr-3">
          <span>{reviewer}</span>
          <span>Execution in progress</span>
          <div className="d-flex">
            <span className="mr-2">{rdate}</span>
            <span>{rtime}</span>
          </div>
      </div>
    </Link>
  );
};

export default ServiceStatusComponent;
