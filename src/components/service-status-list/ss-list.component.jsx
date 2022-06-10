import ServiceStatusComponent from "../service-status/service-status.component";
import sslist from "./temp2.json";
import "./ss-list.styles.css";

const SsList = () => {
  return (
    <div className="">
      {sslist &&
        sslist.map((service) => (
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
