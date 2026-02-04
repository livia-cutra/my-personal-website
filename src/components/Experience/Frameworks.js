//import React from "react";
import { Col, Row } from "react-bootstrap";

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

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
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

export default Frameworks;
