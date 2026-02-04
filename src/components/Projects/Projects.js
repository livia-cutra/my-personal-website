import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import ashmi from "../../Assets/Projects/ashmi.png";
import forge from "../../Assets/Projects/forge.png";
import livsloops from "../../Assets/Projects/livsloops.png";
import verdata from "../../Assets/Projects/verdata.png";
import btt from "../../Assets/Projects/btt.png";
import ood from "../../Assets/Projects/ood.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          my recent <strong >works </strong>
        </h1>
        <p style={{ color: "dark green" }}>
          below are a mix of projects i've worked on outside of class
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livsloops}
              isBlog={false}
              title="Livsloops"
              description="the website for my small crochet business, designed and developed end-to-end.
i led full-stack development from figma to implementation, building a responsive, accessible e-commerce experience with react, tailwind, and backend integrations."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forge}
              isBlog={false}
              title="Forge"
              description="a homepage redesign for forge, northeastern’s student-led product lab.
i redesigned the landing experience and fully developed the page using react and tailwind to improve clarity, visual hierarchy, and storytelling."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verdata}
              isBlog={false}
              title="Verdata"
              description="a sustainability-focused web tool built during HackBeanpot to help individuals reflect on their environmental impact.
i collaborated with a team as a hacker and independently led the frontend development, implementing the UI and interaction flow for carbon data visualization."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btt}
              isBlog={false}
              title="Break Through Tech"
              description="a machine-learning project developed in partnership with Allstate through the Break Through Tech AI Fellowship.
engineered features and trained regression models on 188k records, reducing mean absolute error by 22% and improving claim-severity predictions for resource allocation and risk management."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ashmi}
              isBlog={false}
              title="Ashmi Health"
              description="a women’s health wellness-tech startup focused on making hormonal health more accessible.
redesigned the website to clarify the platform’s role as an AI-powered health tool, strengthening brand consistency, navigation flow, and mobile responsiveness to build trust and guide users toward personalized care."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ood}
              isBlog={false}
              title="TripleTriad"
              description="built a flexible game engine with human and AI players (greedy, minimax, defensive strategies), dynamic boards, and extensible logic, and integrated another team’s codebase by adapting our model and controller to support their screen, reinforcing modular design, testing, and adaptability."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
