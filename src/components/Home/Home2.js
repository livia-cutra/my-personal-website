import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";

import resume from "../../Assets/resume2026.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title" style={{ fontSize: "2.0em"}}>
              a quick <span className="purple"> introduction </span> 
            </h1>

            <p className="home-about-body lead">
  i am a third year computer science & design student at northeastern university. i enjoy working across the stack to create technology that feels intuitive, thoughtful, and genuinely useful to the people interacting with it.
</p>


<p className="home-about-body">
  i work with{" "}
  <span className="highlight">both frontend and backend systems</span>, building
  clean interfaces supported by well-structured logic. my background in leadership 
  and entrepreneurship shapes how i approach{" "}
  <span className="highlight">usability, collaboration, and problem-solving</span> in technical spaces.
</p>
<p className="home-about-body">
  i’m especially drawn to opportunities where i can continue growing as a full-stack engineer
  while contributing to technology that feels{" "}
  <span className="highlight">purposeful and intentional</span>. 
          
            </p>
            <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="home-cta"
>
  view resume
</a>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
