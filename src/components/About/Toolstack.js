import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiOpera } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpera fontSize={"24px"} />
        <div className="tech-icons-text">Opera</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode fontSize={"24px"} />
        <div className="tech-icons-text">OpenCode</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
