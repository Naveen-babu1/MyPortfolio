import React, { useState, useEffect, useRef } from "react";
import "./Myjourney.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Myjourney = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const componentRef = useRef(null);

    const handleScroll = () => {
      if (componentRef.current) {
        const componentTop = componentRef.current.getBoundingClientRect().top;
        setScrollPosition(Math.max(0, window.scrollY - componentTop));
      }
    };
    useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <Container className="myjourney">
      <Row>
        <div className="myjourney-header">
          My <span className="color">Journey.</span>
        </div>
      </Row>
      <Row className="myjourney-row1">
        <Col sm={2} ref={componentRef} className="line-container">
          <div className="myjourney-num">01</div>
          <div className="vertical-line" style={{ height: `${scrollPosition}px` }} />
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Easwari Engineering College</span></div>
          <div>Electrical & Electronice Engineering, 2017-2021.</div>
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
      <Row className="myjourney-row2">
        <Col sm={2} ref={componentRef} className="line-container">
          <div className="myjourney-num">02</div>
          <div className="vertical-line" style={{ height: `${scrollPosition}px` }} />
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Tata Consulatancy Services</span></div>
          <div>Frontend Developer, 2021-2023.</div>
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
        <Col sm={2} ref={componentRef} className="line-container">
          <div className="myjourney-num">03</div>
          <div className="vertical-line" style={{ height: `${scrollPosition}px` }} />
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head"><span className="color">Northeastern University</span></div>
          <div>Masters in Information Systems, 2023-present.</div>
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
      <Row className="myjourney-row4">
        <Col sm={2}>
          <div className="myjourney-num">04</div>
        </Col>
        <Col sm={10}>
          <div className="myjourney-desc-head-last">Could be <span className="color"> Your Coumpany...</span></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Myjourney;
