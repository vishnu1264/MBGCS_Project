import ServiceStatusComponent from "../service-status/service-status.component";
import "./ss-list.styles.css";

const SsList = ({list}) => {
  return (
    <div className="service-status-list">
      {list &&
        list.map((service) => (
          <ServiceStatusComponent
            id={service.id}
            servicetype={service.servicetype}
            name={service.name}
            date={service.date}
            time={service.time}
            reviewer={service.reviewer}
            rdate={service.rdate}
            rtime={service.rtime}
          />
        ))}
    </div>
  );
};

export default SsList;
