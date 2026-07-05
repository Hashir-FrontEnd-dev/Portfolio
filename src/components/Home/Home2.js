import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer passionate about building modern,
              responsive, and user-friendly web applications. I enjoy turning
              ideas into clean, interactive, and visually engaging digital
              experiences while continuously learning and improving my craft.
              <br />
              <br />
              My primary expertise lies in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, and Tailwind CSS
                </b>
              </i>
              , with a strong focus on writing clean, maintainable code and
              creating intuitive user interfaces.
              <br />
              <br />
              I enjoy working on real-world projects that challenge my
              problem-solving skills and help me grow as a developer. Whether
              it’s developing responsive websites, optimizing user experiences,
              or learning new technologies, I’m always looking for opportunities
              to build better products and expand my skill set.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
