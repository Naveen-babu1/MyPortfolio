import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import html from "../assets/html-5 (1).png";
import css from "../assets/css-3 (2).png";
import js from "../assets/js (1).png";
import reactjs from "../assets/react (1).png";
import boot from "../assets/bootstrap.png";
import sasss from "../assets/sass.png";
import nodjs from "../assets/nodejs (1).png";
import npmm from "../assets/npm.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/MongoDB-Logo.jpg";
import github from "../assets/github (1).png";
import typejs from "../assets/typescript.png";
import "./Skills.css";
// import { Row } from "react-bootstrap";
const Skills = () => {
  return (
    <Container className="skills">
      <Row className="myjourney-header">
        <h1  className="skills-h1">
          Skills<span className="color">.</span>
        </h1>
      </Row>
      {/* <div className="skills-main"> */}
      <div className=" skills-row">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={boot} alt="" />
        <img src={sasss} alt="" />
        <img src={reactjs} alt="" />
        <img src={typejs} alt="" />
        <img src={nodjs} alt="" />
        <img src={npmm} alt="" />
        <img src={github} alt="" />
        <img src={sql} alt="" />
        <img src={mongo} alt="" />
        <img src={mysql} alt="" />
      </div>
      <div className=" skills-row">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={boot} alt="" />
        <img src={sasss} alt="" />
        <img src={reactjs} alt="" />
        <img src={typejs} alt="" />
        <img src={nodjs} alt="" />
        <img src={npmm} alt="" />
        <img src={github} alt="" />
        <img src={sql} alt="" />
        <img src={mongo} alt="" />
        <img src={mysql} alt="" />
      </div>
      {/* </div> */}
      
    </Container>
  );
};

export default Skills;
