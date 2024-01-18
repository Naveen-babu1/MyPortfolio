import React from "react";
import "./Myjourney.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Myjourney = () => {
  return (
    <Container>
      <Row>
        <div className="myjourney-header">
          My <span className="color">Journey.</span>
        </div>
      </Row>
      <Row className="myjourney-row1">
        <Col sm={2}>
          <div className="myjourney-num">01</div>
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Easwari Engineering College</span></div>
          <div>Electrical & Electronice Engineering, India.</div>
          <div className="myjourney-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br></br>
            Commodo viverra maecenas accumsan lacus. Fringilla ut morbi
            tincidunt augue interdum. Elementum integer enim<br></br> neque
            volutpat ac tincidunt vitae semper quis.
          </div>
        </Col>
      </Row>
      <Row className="myjourney-row2">
        <Col sm={2}>
          <div className="myjourney-num">02</div>
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Tata Consulatancy Services</span></div>
          <div>Chennai, India.</div>
          <div className="myjourney-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br></br>
            Commodo viverra maecenas accumsan lacus. Fringilla ut morbi
            tincidunt augue interdum. Elementum integer enim<br></br> neque
            volutpat ac tincidunt vitae semper quis.
          </div>
        </Col>
      </Row>
      <Row className="myjourney-row3">
        <Col sm={2}>
          <div className="myjourney-num">03</div>
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Northeastern University</span></div>
          <div>Boston, MA.</div>
          <div className="myjourney-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br></br>
            Commodo viverra maecenas accumsan lacus. Fringilla ut morbi
            tincidunt augue interdum. Elementum integer enim<br></br> neque
            volutpat ac tincidunt vitae semper quis.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Myjourney;
