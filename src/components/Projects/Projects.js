import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cinebuzz from "../../Assets/Projects/cinebuzz.png";
import sticko from "../../Assets/Projects/sticko.png";
import kolegia from "../../Assets/Projects/kolegia.jpeg";
import rest from "../../Assets/Projects/rest.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kolegia}
              isBlog={false}
              title="Kolegia"
              description="Kolegia is a platform for college communities to promote their stuff or belongings inside their campus fraternity. It enables users to trade their belongings or file theft or missing complaint about their goods on the platform."
              link="https://github.com/AdityaPandey03/Kolegia_FrontEnd"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cinebuzz}
              isBlog={false}
              title="CineBuzz"
              description="So it is a movie booking website. User can browse through the movies and can select multiple seats.I've used HTML, CSS, Node.Js , Express and PostgreSQL to design the website."
              link="https://github.com/AdityaPandey03/Movie-Booking"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sticko}
              isBlog={false}
              title="StickoWorld"
              description="We have used Kotlin to design the app. This app is designed for android users. Stickoworld is a platform through which you can add cool stickers to your google board. You can also add the stickers to your gallery and share them with your friends."
              link="https://github.com/AdityaPandey03/MyDashboard"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={rest}
              isBlog={false}
              title="Search Restaurant"
              description="Developed a mobile application using react-native. Used yelp api to fetch restaurant data. Users can see restaurants based on the price. It is yet to be completed but the main purpose of this app will be to find restaurants."
              link="https://github.com/AdityaPandey03/Restaurant-Search-App"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
