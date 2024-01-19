import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import Subject from "../assets/image.jpg";
import Button from "react-bootstrap/Button";
import Resume from "../assets/Resume.pdf";
import { saveAs } from "file-saver";
import Linkedin from "../assets/linkedin (1).png";
import Insta from "../assets/instagram (1).png";

const Header = () => {
  const handleDownload = () => {
    // Use file-saver to trigger the download
    saveAs(Resume, "naveenresume.pdf");
  };
  return (
    <Container>
      <Row className="main-div">
        <Col sm={8}>
          <div className="main-col-1-desc">
            <div className="first">
              Hey, I'm Naveen Babu, <br></br>
              <span className="color">Fullstack</span> developer!{" "}
            </div>
            <div className="second">
              I build web app that are not just interactive but human-friendly
            </div>
          </div>
          <Button
            onClick={handleDownload}
            className="button"
            variant="dark"
            size="lg"
          >
            Resume
          </Button>
        </Col>
        <Col sm={4} className="right-div">
          <div className="c">
            <div className="d">
              <img src={Subject} alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="main-col-2-card-4">
          <div className="socialss">
            <a
              href="https://www.linkedin.com/in/naveenbabujbn/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="" />
            </a>
            <a
              href="https://www.instagram.com/0xnaveen_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="location">
            <div className="location-pin"></div>
            <h5>Boston, MA</h5>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
