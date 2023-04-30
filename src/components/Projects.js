import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";

import TrackVisibility from "react-on-screen";
function Projects() {
  const projects = [
    {
      title: "CpE Insiders",
      description: "Fun and Content Creation",
      imgUrl: projImg1,
    },
    {
      title: "Are you Okay?",
      description: "Mental Health Awareness Initiatives",
      imgUrl: projImg2,
    },
    {
      title: "CES Connect",
      description: "Efficient. Fast. Elaborate",
      imgUrl: projImg3,
    },
    {
      title: "MasterMinds",
      description: "Sharing Knowledge",
      imgUrl: projImg4,
    },
    {
      title: "Agila",
      description: "Imparting skills for the Future Generation",
      imgUrl: projImg5,
    },
    {
      title: "CpE Merchandise",
      description: "For students. By students.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are the list of projects prepared by the CpE Council
                    for the First Semester of school year 2022-2023.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">1st Semester</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2nd Semester</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Summer</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
export default Projects;
