import React from "react";
import "./KnowMore.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import BirdCoffee from "../assets/birdcoffee.png";
import Button from "react-bootstrap/esm/Button";
import Resume from "../assets/NaveenBabu_Resume.pdf";
import { saveAs } from "file-saver";
const KnowMore = () => {
  const handleDownload = () => {
    // Use file-saver to trigger the download
    saveAs(Resume, "naveenresume.pdf");
  };
  return (
    <Container className="knowmore">
      <Row>
        <Col sm={7} className="knowmore-col-1">
          <div className="knowmore-header">
            "Curious to know more about my journey or thinking of working
            together? Either way, let’s connect and create something amazing!"
          </div>
          <div className="resume-button">
            <Button
              onClick={handleDownload}
              className="button"
              // variant="dark"
              // size="lg"
            >
              Resume
            </Button>
          </div>
        </Col>
        <Col sm={5} className="knowmore-col-2">
          <img src={BirdCoffee} className="birdcoffee" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default KnowMore;
