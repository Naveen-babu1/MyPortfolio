import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container>
      <Row className="nav">
        <Col className="logo" xs={8}>
          Naveen<span className="color">babu</span>
        </Col>
        <Col>
        <div className="menu">
          <div className="">Projects</div>
          <div className="">Skills</div>
          <div className="">About</div>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
