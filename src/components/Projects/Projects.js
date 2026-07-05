import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Meteor from "../Meteor";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import buisnessNexus from "../../Assets/Projects/buisness-nexus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Meteor />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Developed a responsive e-commerce website using HTML5, CSS3, and JavaScript. It includes product listings, shopping cart functionality, and a clean, user-friendly interface optimized for all devices."
              ghLink="https://github.com/Hashir-FrontEnd-dev/e-commerce-web"
              demoLink="https://hashir-e-commerce-web.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buisnessNexus}
              isBlog={false}
              title="Buisness-Nexus"
              description="Developed a responsive business networking platform using React and Next.js. The platform enables users to browse entrepreneurs and investors, explore business opportunities, and connect within a professional ecosystem."
              ghLink="https://github.com/Hashir-FrontEnd-dev/Nexus"
              demoLink="https://nexus-three-sandy.vercel.app/login"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
