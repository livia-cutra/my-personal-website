//import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";

import Csharp from "../../Assets/TechIcons/csharp.svg.png";
import CSS from "../../Assets/TechIcons/css-logo.png";
import HTML from "../../Assets/TechIcons/html.svg.png";
import Swift from "../../Assets/TechIcons/swift.svg";

import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
//i think this is postgreSQL, thnk they are two different things???
//import SQL from "../../Assets/TechIcons/SQL.svg";

//FastAPI
import FastAPI from "../../Assets/TechIcons/fastapi-logo.svg";
//Three.js

//p5.js
import p5js from "../../Assets/TechIcons/p5js-logo.svg";
//Scikit-learn

//react
import React from "../../Assets/TechIcons/React.svg";


//Java
//Python
//JavaScript
//TypeScript
//C#
//Swift
//HTML
//CSS
//SQL


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Csharp} alt="CSharp" />
        <div className="tech-icons-text">C#</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Swift} alt="Swift" className="tech-icon-images" />
        <div className="tech-icons-text">Swift</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={React} alt="react" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={FastAPI} alt="fastapi" />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={p5js} alt="p5js" />
        <div className="tech-icons-text">p5.js</div>
      </Col>


    </Row>
  );
}

export default Techstack;
