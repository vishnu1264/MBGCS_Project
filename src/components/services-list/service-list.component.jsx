import "./service-list.css";
import ServiceCard from "../service-card/service-card.component";
import services from "./temp.json";

const ServiceList = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <span>Un Assigned Services</span>
        <div className="dropdown">
          <button className="btn" type="button" data-toggle="dropdown">
            <img src="../../menu.png" alt="" style={{ height: 25 }} />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span className="dropdown-item">Assign</span>
            <span className="dropdown-item">Re-Assign</span>
          </div>
        </div>
      </div>
      <div className="services-list">
        <div>
          {services &&
            services.map((service) => (
              <ServiceCard
                id={service.id}
                servicetype={service.servicetype}
                name={service.name}
                date={service.date}
                time={service.time}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
