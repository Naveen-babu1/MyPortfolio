import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container>
      <Row className="nav">
        <Col className="logo" xs={8}>
          NAVEEN BABU
        </Col>
        <Col>
          <div className="main-col-2-card-4">
            <div className="location-pin"></div>
            <h5>Boston, MA</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
