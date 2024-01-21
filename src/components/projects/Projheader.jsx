import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Projheader = () => {
  return (
    <Container>
      <Row>
        <div className="myjourney-header">
          My<span className="color">projects.</span>
        </div>
      </Row>
    </Container>
  );
};

export default Projheader;
