import Sidebar from "../../components/sidebar/sidebar.component";
import TopMenu from "../../components/top-menu/topmenu.component";
import ServiceList from "../../components/services-list/service-list.component";
import ServiceRoles from "../../components/service-role/service-role.component";
import "./home.styles.css";

const Home = () => {
  return (
    <div>
      <div className="sme-dashboard">
        <div>
          <Sidebar />
        </div>
        <div className="sme-page-content">
          <div className="sme-top-menu">
            <TopMenu />
          </div>
          <hr className="my-2" />
          <div className="sme-content-block">
            <ServiceRoles />
            <ServiceList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
