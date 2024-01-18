import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import Subject from "../assets/image.jpg";
import Button from 'react-bootstrap/Button';
import Resume from "../assets/Resume.pdf";
const Header = () => {
  // const rowStyle = {
  //   transform: "translate3d(0px, -0.0019px, 0px)",
  // };
  const handleDownload = ({ pdfUrl }) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = Resume;
    link.click();
  }
  return (
    <Container>
      {/* <Row className="header" style={rowStyle}>
        <Col sm={10}>
          <div className="main-col-1-desc" style={rowStyle}>
            <div className="desc-1">UI-UX</div>
            <div className="desc-2">DESIGN</div>
            <div className="desc-3">DEVELOP</div>
            <div className="desc-4">INTEGRATE</div>
          </div>
        </Col>
        <Col sm={2}>
          <div className="socials">
            <div className="soc-1"><h1>About</h1></div>
            <div className="soc-2">Linkedin</div>
            <div className="soc-3">Github</div>
            <div className="mail">
              <a href="mailto:babu.na@northeastern.edu">
                babu.na@northeastern.edu
              </a>
            </div>
          </div>
        </Col>
      </Row> */}
      <Row className="main-div">
        <Col sm={8}>
          <div className="main-col-1-desc" >
            <div className="first">Hey, I'm Naveen Babu, <br></br><span className="color">Fullstack</span> developer!  </div>
            <div className="second">I build web app that are not just interactive but human-friendly</div>
            {/* <div className="">DEVELOP</div> */}
          </div>
          <Button onClick={handleDownload} className="button" variant="dark" size="lg" >Resume</Button>
        </Col>
        <Col sm={4} className="right-div">
          {/* <div className="image">
            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFD166"
                d="M58.4,-46.8C72.6,-28.8,78.9,-4.7,74.8,18.6C70.7,41.9,56.2,64.3,35.9,73.7C15.6,83.2,-10.5,79.6,-33.6,68.9C-56.8,58.1,-76.9,40.1,-79.2,20.7C-81.5,1.3,-66,-19.5,-49.8,-37.9C-33.7,-56.3,-16.8,-72.3,2.6,-74.4C22.1,-76.6,44.2,-64.7,58.4,-46.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div> */}
          <div className="c">
          <div className="d">
            <img src={Subject} alt="" />
          </div>
          </div>
          
        </Col>
      </Row>
      <Row >
        <div className="main-col-2-card-4">
            <div className="location-pin"></div>
            <h5>Boston, MA</h5>
          </div>
      </Row>
    </Container>
  );
};

export default Header;
