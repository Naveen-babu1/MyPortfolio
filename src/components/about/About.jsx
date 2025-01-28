import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Travel from "../assets/travel.PNG";
const About = () => {
  return (
    <Container className="about">
      <Row>
        <Col className="about-col-1">
          <div className="about-header">
          Crossing Oceans, Crafting Code
          </div>
          <div className="about-desc">
            From the bustling city of Chennai, India, to the dynamic energy
            of Boston, USA, this journey has been about more than just
            mile, it's about turning big dreams into reality. Along the way,
            I’ve grown as a developer, embracing new challenges and
            opportunities to push my boundaries. Each step has shaped my passion
            for building, learning, and making an impact through tech.
          </div>
        </Col>
        <Col className="about-col-2">
          <img className="travel" src={Travel} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
