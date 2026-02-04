import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";

import VSCode from "../../Assets/TechIcons/vscode.svg";
import Unity from "../../Assets/TechIcons/unity.png";
import IntelliJ from "../../Assets/TechIcons/intellij-icon.png";
import Jupyter from "../../Assets/TechIcons/jupyter-logo.png";
import Eclipse from "../../Assets/TechIcons/eclipse.png";
import Excel from "../../Assets/TechIcons/excel.svg.png";
import FastAPI from "../../Assets/TechIcons/fastapi-logo.svg";
import Figma from "../../Assets/TechIcons/figma-logo.png";
import Git from "../../Assets/TechIcons/Git.svg";
import SonarQube from "../../Assets/TechIcons/sonarqube-logo.svg";
import Jira from "../../Assets/TechIcons/jira-logo.svg";
import Jenkins from "../../Assets/TechIcons/jenkins-logo.png";
import Vite from "../../Assets/TechIcons/vite-logo.svg.png";

//GitHub
import Github from "../../Assets/TechIcons/github-logo.png";
//Pandas
//NumPy
import NumPy from "../../Assets/TechIcons/numpy.png";
//Matplotlib / Seaborn
//Google Colab
import Colab from "../../Assets/TechIcons/colab.svg.png";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={VSCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={IntelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Figma} alt="figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Eclipse} alt="eclipse" className="tech-icon-images" />
        <div className="tech-icons-text">Eclipse</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Unity} alt="Unity" className="tech-icon-images" />
        <div className="tech-icons-text">Unity</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jupyter} alt="Jupyter" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Excel} alt="Excel" className="tech-icon-images" />
        <div className="tech-icons-text">Excel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Vite} alt="vite" className="tech-icon-images" />
        <div className="tech-icons-text">Vite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={FastAPI} alt="fastapi" className="tech-icon-images" />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={SonarQube} alt="SonarQube" className="tech-icon-images" />
        <div className="tech-icons-text">SonarQube</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jira} alt="Jira" className="tech-icon-images" />
        <div className="tech-icons-text">Jira</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jenkins} alt="Jenkins" className="tech-icon-images" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Github} alt="Github" className="tech-icon-images" />
        <div className="tech-icons-text">Github</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={NumPy} alt="NumPy" className="tech-icon-images" />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Colab} alt="Google Colab" className="tech-icon-images" />
        <div className="tech-icons-text">Google Colab</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
