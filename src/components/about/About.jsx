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
        <Col  className="about-col-1">
          <div className="about-header">
            About <span className="color">me.</span>
          </div>
          <div className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br></br>
            Commodo viverra maecenas accumsan lacus. Fringilla ut morbi
            tincidunt augue interdum. Elementum integer enim<br></br> neque
            volutpat ac tincidunt vitae semper quis. Fringilla urna porttitor
            rhoncus dolor purus non enim praesent elementum. <br></br>
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
