import Sidebar from "../../components/sidebar/sidebar.component";
import TopMenu from "../../components/top-menu/topmenu.component";
import ServiceList from "../../components/services-list/service-list.component";
import ServiceRoles from "../../components/service-role/service-role.component";
import { useState, useEffect } from "react";
import services from "../../components/services-list/temp.json";
import "./home.styles.css";

const Home = () => {
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
      <div className="sme-dashboard">
        <div>
          <Sidebar />
        </div>
        <div className="sme-page-content">
          <div className="sme-top-menu">
            <TopMenu onSearchChange={onSearchChange} />
          </div>
          <div className="sme-content-block">
            <ServiceRoles />
            <ServiceList list={filteredServices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
