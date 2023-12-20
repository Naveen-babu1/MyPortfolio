import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
const Header = () => {
  const rowStyle = {
    transform: "translate3d(0px, -0.0019px, 0px)",
  };
  return (
    <Container>
      <Row className="header" style={rowStyle}>
        <Col xs={6}>
          <div className="main-col-1-desc" style={rowStyle}>
            <div className="desc-1">UI-UX</div>
            <div className="desc-2">DESIGN</div>
            <div className="desc-3">DEVELOP</div>
            <div className="desc-4">INTEGRATE</div>
          </div>
        </Col>
        <Col>
          <div className="socials">
            <div>About</div>
            <div>Linkedin</div>
            <div>Github</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
