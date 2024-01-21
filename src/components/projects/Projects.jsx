import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import projectimg1 from "../assets/projectmock1.png";
import projectimg2 from "../assets/projectmock2.png";
const Projects = () => {
  return (
    <Container className="projects">
      {/* <div className="myjourney-header">
        My <span className="color">projects.</span>
      </div> */}
      <div className="projects-con">
        <Row className="projects-1">
          <img src={projectimg1} alt="" />
          <div>This is a alumni connect website for university.</div>
        </Row>
        <Row className="projects-1">
          <img src={projectimg2} alt="" />
          <div>This is a alumni connect website for university.</div>
        </Row>
        <Row className="projects-1">
          <img src={projectimg2} alt="" />
          <div>This is a alumni connect website for university.</div>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
