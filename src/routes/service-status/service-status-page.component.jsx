import "./service-status-page.styles.css";
import Sidebar from "../../components/sidebar/sidebar.component";
import SsTopMenu from "../../components/ss-top-menu/ss-top-menu.component";
import SsList from "../../components/service-status-list/ss-list.component";

const ServiceStatusPage = () => {
  return (
    <div>
      <div className="ss-page">
        <div>
          <Sidebar />
        </div>
        <div className="ss-page-content">
          <div>
            <SsTopMenu />
          </div>
          <hr />
          <div className="ss-content-block">
            <SsList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatusPage;
