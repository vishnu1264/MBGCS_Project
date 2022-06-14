import "./service-list.css";
import ServiceCard from "../service-card/service-card.component";

const ServiceList = ({ list }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <span>Un Assigned Services</span>
        <div className="dropdown">
          <button className="btn" type="button" data-toggle="dropdown">
            <img src="../../menu.png" alt="" style={{ height: 25 }} />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="dropdown dropdown-item" data-toggle="dropdown">
              Assign
            </div>
            <div className="dropdown-item">Re-Assign</div>
          </div>
        </div>
      </div>
      <div className="services-list">
        <div>
          {list &&
            list.map((service) => (
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
