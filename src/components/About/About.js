import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

import capitalone from "../../Assets/CommunityPhotos/capitalone.jpg";
import ees from "../../Assets/CommunityPhotos/ees.jpg";
import tuftswit from "../../Assets/CommunityPhotos/tuftswit.jpg";
import ukg1 from "../../Assets/CommunityPhotos/ukg.jpg";
import ukg2 from "../../Assets/CommunityPhotos/ukg2.jpg";
import wecode1 from "../../Assets/CommunityPhotos/wecode1.jpg";
import wecode2 from "../../Assets/CommunityPhotos/wecode2.jpg";

function About() {
  return (
    <>
      {" "}
      <Container fluid className="about-section">
        <Row className="justify-content-center">
          <Col md={8} className="about-content">
            <h1 style={{ fontSize: "2.0em", paddingBottom: "20px", color: "#2e5840" }}>
              get to <strong >know</strong> me
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <Container>
          <section className="community-section">
            <div className="community-header">
              <h2 className="community-title">building in community</h2>
              <p className="community-blurb">
                i believe learning is collective. the work i’m most proud of is
                shaped by collaboration, care, and the people i build alongside.
              </p>
            </div>

            <div className="community-gallery">
              <div className="community-card">
                <img src={wecode1} alt="WECode Conference 2025" />
                <div className="community-overlay">WECode Conference 2025</div>
              </div>

              <div className="community-card">
                <img src={wecode2} alt="WECode Conference 2025" />
                <div className="community-overlay">WECode Conference 2025</div>
              </div>

              <div className="community-card">
                <img src={ees} alt="CodePath Emerging Engineers Summit 2025" />
                <div className="community-overlay">
                  CodePath Emerging Engineers Summit 2025
                </div>
              </div>

              <div className="community-card">
                <img src={tuftswit} alt="Tufts Women in Tech Conference 2024" />
                <div className="community-overlay">
                  Tufts Women in Tech Conference 2024
                </div>
              </div>

              <div className="community-card">
                <img
                  src={capitalone}
                  alt="Rewriting the Code x Capital One Mixer 2025"
                />
                <div className="community-overlay">
                  Rewriting the Code x Capital One Mixer 2025
                </div>
              </div>

              <div className="community-card">
                <img src={ukg1} alt="UKG Interns Fall 2025" />
                <div className="community-overlay">UKG Interns Fall 2025</div>
              </div>

              <div className="community-card">
                <img src={ukg2} alt="UKG Interns Fall 2025" />
                <div className="community-overlay">UKG Interns Fall 2025</div>
              </div>
            </div>
          </section>
        </Container>
      </Container>
    </>
  );
}

export default About;
