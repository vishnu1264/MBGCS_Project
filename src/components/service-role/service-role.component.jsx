import StatusCard from "../status-card/status-card.component";
import "./service-role.styles.css";

const ServiceRoles = () => {
  return (
    <div className="service-component d-flex justify-content-between">
      <StatusCard status="Un Assigned" number="12" />
      <StatusCard status="Assigned" number="08" />
      <StatusCard status="Closed" number="09" />
    </div>
  );
};

export default ServiceRoles;
