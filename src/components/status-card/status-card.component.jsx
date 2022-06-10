import "./status-card.css";

const StatusCard = ({status, number}) => {
  return (
    <div className="status-card d-flex flex-row justify-content-between">
      <img className="status-card-image" src="../../awkwardman.png" alt="" />
      <div className="d-flex flex-column">
          <span>{status}</span>
          <span>{number}</span>
      </div>
    </div>
  );
};

export default StatusCard;