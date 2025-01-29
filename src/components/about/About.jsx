import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Travel from "../assets/travel.PNG";
const About = () => {
  return (
    <Container className="about">
      <div className="amagicpattern"></div>
      <div className="amagicpattern1"></div>
      <div className="amagicpattern2"></div>
      <div className="amagicpattern3"></div>
      <Row>
        <Col sm={7} className="about-col-1">
          <div className="about-header">Crossing Oceans, Crafting Code</div>
          <div className="about-desc">
            From the bustling city of Chennai, India, to the dynamic energy of
            Boston, USA, this journey has been about more than just mile, it's
            about turning big dreams into reality. Along the way, I’ve grown as
            a developer, embracing new challenges and opportunities to push my
            boundaries. Each step has shaped my passion for building, learning,
            and making an impact through tech.The thrill of solving complex
            problems and bringing ideas to life keeps me going every day. With
            every project, I strive to create meaningful solutions that blend
            innovation with purpose.
          </div>
        </Col>
        <Col sm={5} className="about-col-2">
          <img className="travel" src={Travel} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
