import "./service-form.styles.css";
import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar.component";
import Form from "../../components/form/form.component";
import Chat from "../../components/chat/chat.component";
import FilePreview from "../../components/file-preview/file-preview.component";

const ServiceForm = () => {
  const [chat, setChat] = useState("false");

  const showPreview = () => {
    if (chat === "true") setChat("false");
  };
  const showChat = () => {
    if (chat === "false") setChat("true");
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="form-container d-flex">
        <div className="sme-form">
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <h4>Income Tax Return of India</h4>
              <img
                onClick={showChat}
                className="ml-5 mr-2 mb-1"
                src="../../chat.png"
                alt=""
                style={{ height: 25 }}
              />
              <img
                onClick={showPreview}
                className="mb-1"
                src="../../paper-clip.png"
                alt=""
                style={{ height: 25 }}
              />
            </div>
            <hr className="thin-hr-line" />
            <div>
              <Form />
            </div>
          </div>
        </div>
        <div className="sme-chat d-flex flex-column">
          {chat === "true" ? (
            <div>
              <h4>Chat</h4>
              <hr className="thin-hr-line" />
              <Chat />
            </div>
          ) : (
            <FilePreview />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
