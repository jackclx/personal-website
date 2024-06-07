import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fairsplit.jpg";
import projImg2 from "../assets/img/hackathon.jpeg";
import projImg3 from "../assets/img/pacKRages.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FairSplit",
      description: "Bill Splitting Telegram Bot with active 100 users",
      imgUrl: projImg1,
      url: "https://t.me/EasySplitMoneyBot"
    },
    {
      title: "AI Hackathon",
      description: "0.95R2 XGBoostGBM predictive model, finalist",
      imgUrl: projImg2,
      url: "https://shorturl.at/wU03R"
    },
    {
      title: "pacKRages",
      description: "Parcel Tracking Solutio, Best Presentaion Award",
      imgUrl: projImg3,
      url: "https://shorturl.at/uVBBb"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Over the past two years, I've participated in numerous hackathons and developed several side projects. My most notable achievements and proudest projects are listed below.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
