import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cinebuzz from "../../Assets/Projects/cinebuzz.png";
import ai from "../../Assets/Projects/ai.png";
import kolegia from "../../Assets/Projects/kolegia.jpeg";
import affiliate from "../../Assets/Projects/affiliate.png";

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
              imgPath={ai}
              isBlog={false}
              title="AI New Reader"
              description="We have used React Js to design the app. This app is designed for web users. AI New Reader is a platform through which you can search latest news by your voice command. You can also open specific news by giving a command."
              link="https://github.com/rht-singh/A.I-news.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={affiliate}
              isBlog={false}
              title="Affiliate Marketing"
              description="Developed a web application using HTML , CSS and Javascript. Used yelp api to fetch users  data. Users can see buys some product based on the price.It's main purpose to create a large network."
              link="https://github.com/amar1234jeet/affilate_marketing.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
