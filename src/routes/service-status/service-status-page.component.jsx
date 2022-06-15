import "./service-status-page.styles.css";
import Sidebar from "../../components/sidebar/sidebar.component";
import SsTopMenu from "../../components/ss-top-menu/ss-top-menu.component";
import SsList from "../../components/service-status-list/ss-list.component";
import services from '../../components/service-status-list/temp2.json'
import { useState, useEffect } from "react";

const ServiceStatusPage = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    const filteredservices = services.filter((service) => {
      return service.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredServices(filteredservices);
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    <div>
      <div className="ss-page">
        <div>
          <Sidebar />
        </div>
        <div className="ss-page-content">
          <div>
            <SsTopMenu onSearchChange={onSearchChange} />
          </div>
          <hr />
          <div className="ss-content-block">
            <SsList list={filteredServices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatusPage;
