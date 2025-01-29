import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
// import Subject from "../assets/image.jpg";
import Button from "react-bootstrap/Button";
import Resume from "../assets/NaveenBabu_Resume.pdf";
import { saveAs } from "file-saver";
import Linkedin from "../assets/linkedin (1).png";
import Insta from "../assets/instagram (1).png";
import AirBln1 from "../assets/airbln1.png";
import AirBln2 from "../assets/airbln2.png";
import Sky from "../assets/sky.jpg";
// import Profile from "../assets/profile2.jpg";

const Header = () => {
  const handleDownload = () => {
    // Use file-saver to trigger the download
    saveAs(Resume, "naveenresume.pdf");
  };
  return (
    <Container>
      <div className="magicpattern"></div>
      <div className="magicpattern1"></div>
      <div className="magicpattern2"></div>
      <div className="magicpattern3"></div>

      <Row className="main-div">
        <Col sm={2} className="">
          <img className="airbln2" src={AirBln2} alt="" />
        </Col>
        <Col sm={8} className="desc">
          <div className="main-col-1-desc">
            <div className="first">
              Hey, I'm Naveen Babu, <br></br>
              Fullstack
              <svg
                viewBox="0 0 1213 73"
                aria-hidden="true"
                preserveAspectRatio="none"
                height="15"
                className="underline"
              >
                <g buffered-rendering="static">
                  <path
                    fill="url(#underline-gradient)"
                    d="M1213.19 35.377c2.37-13.011-22.95-10.753-31.04-14.087C1086.89 5.705 911.742 2.887 815.218 2.809c-78.003.231-155.966-1.833-233.961.481-57.545.429-114.885 6.164-172.419 7.383-121.164 5.39-242.94 10.751-362.507 32.199-12.356 3.286-25.614 4.255-37.332 9.401-29.507 22.983 27.103 20.15 39.468 17.234 357.956-47.703 362.767-46.261 636.452-50.97 121.033-2.508 241.892 6.658 428.341 19.243 4.74.404 8.98-4.032 8-8.788a942.105 942.105 0 0154.69 6.378c9.44 1.843 18.92 3.583 28.29 5.729 4.01.839 8.02-1.718 8.95-5.712v-.01z"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    gradientTransform="rotate(110)"
                  >
                    <stop offset="5%" stop-color="#CA7FF8"></stop>
                    <stop offset="95%" stop-color="#795BE9"></stop>
                  </linearGradient>
                </defs>
              </svg>{" "}
              developer!{" "}
            </div>
            <div className="second">
              I build web app that are not just interactive but human-friendly
            </div>
            <div className="third">
              <Button
                onClick={handleDownload}
                className="button"
                // variant="dark"
                // size="lg"
              >
                Resume
              </Button>
            </div>
          </div>
        </Col>
        <Col sm={2} className="">
          <img className="airbln1" src={AirBln1} alt="" />
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
