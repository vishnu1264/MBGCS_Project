import "./service-card.css";

const ServiceCard = ({ id, servicetype, name, date, time }) => {
  return (
    <div key={id} className="service-card d-flex align-items-center">
      <div>
        <img className="service-image" src="../../man.png" alt="" />
      </div>
      <div className="d-flex flex-column ml-2 mr-5">
        <span className="mr-4">{servicetype}</span>
        <span>{name}</span>
      </div>

      <div className="d-flex flex-column ml-5">
        <span>Check List to be Submitted</span>
        <div className="d-flex flex-row">
          <img
            className="mt-1"
            src="../../datetime.png"
            alt=""
            style={{ height: 20 }}
          />
          <span className="mr-4">{date}</span>
          <span>{time}</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ServiceCard;
