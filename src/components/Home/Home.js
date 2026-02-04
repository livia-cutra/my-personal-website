import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/firstheadshot.png";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiFillWindows
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 20 }} className="heading">
  <em>hello world!</em>{" "}
  <span className="wave" role="img" aria-labelledby="wave">
    👋🏻
  </span>
</h1>




              <h1 className="heading-name">
                i'm
                <strong className="main-name"> livia cutra</strong>
              </h1>

              <div className="typewriter-wrapper1">
                <Type />
              </div>
              

            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-start">
              <div className="home-image-wrapper">
                <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "350px"}}
                />
                </Tilt>

                </div> 
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>let's get in touch</h1>
            <p>
              <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/livia-cutra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/liviacutra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:cutra.l@northeastern.com?subject=Connecting%20From%20Portfolio&body=Hi%20Livia,%0A%0A"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <HiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
