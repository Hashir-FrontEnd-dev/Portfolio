import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muhammad hashir</span>{" "}
            from <span className="purple">Karachi, Pakistan</span>.
            <br />
            I have done my internship as{" "}
            <span className="purple">Front End Developer </span> at{" "}
            <span className="purple">Developers Hub Corporation</span>.
            <br />I hold a Diploma of Associate Engineering (DAE) in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">Jinnah Polytechnic Institute.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout at gym 🏋️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crafting interfaces people enjoy using—learning, improving, and growing with every commit."{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Hashir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
