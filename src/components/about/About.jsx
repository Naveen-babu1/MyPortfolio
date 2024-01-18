import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
const About = () => {
  return (
    <Container className="about">
      <Row>
        <div className="about-header">
          About <span className="color">me.</span>
        </div>
      </Row>
      <Row>
        <div className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
          Commodo viverra maecenas accumsan lacus. Fringilla ut morbi tincidunt
          augue interdum. Elementum integer enim<br></br> neque volutpat ac
          tincidunt vitae semper quis. Fringilla urna porttitor rhoncus dolor
          purus non enim praesent elementum. <br></br>
          <br></br>Consectetur adipiscing elit pellentesque habitant morbi. Est
          sit amet facilisis magna. Orci phasellus egestas tellus rutrum tellus
          pellentesque eu. Mauris pellentesque pulvinar pellentesque habitant
          morbi tristique. Tempus imperdiet nulla malesuada pellentesque elit
          eget.
        </div>
      </Row>
    </Container>
  );
};

export default About;
