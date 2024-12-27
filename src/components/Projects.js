import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import logo11 from "../assets/img/logo1.png";
import logo12 from "../assets/img/logo2.png";
import logo13 from "../assets/img/logo3.png";
import logo14 from "../assets/img/logo4.png";
import logo15 from "../assets/img/logo5.png";
import logo16 from "../assets/img/logo6.png";
import logo17 from "../assets/img/logo7.png";
import logo18 from "../assets/img/logo8.png";
import logo19 from "../assets/img/logo9.png";
import logo10 from "../assets/img/logo10.png";
import logo111 from "../assets/img/logo111.png";
import logo112 from "../assets/img/logo112.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Interior and Exterior Designs",
      description: "Crafting innovative and functional designs for stunning interiors and exteriors, blending creativity with development expertise to bring your vision to life",
      imgUrl: projImg1,
      link: "https://comfort-home-host.onrender.com/" 
    },
    {
      title: "DamFlow Maintenanc",
      description: "Ensuring optimal dam performance through innovative design, efficient development, and proactive maintenance solutions",
      imgUrl: projImg2,
    },
    {
      title: "Irctc Clone",
      description: "Replicating the IRCTC platform with innovative design and seamless development for a user-friendly, efficient ticketing experience",
      imgUrl: projImg3,
    },
    {
      title: "HR Management Portal",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

<div>
  <center>

<h1>SKILLS</h1>
<p>Here are some of skills on which I have learnt.</p>
  </center>
<div className="logo-box-container-wrapper">
  <div className="logo-box-container">
    <div className="logo-container">
      <p className="logo-header">Frontend</p>
      <div className="logo-grid">
        <div className="logo-item">
          <img src={logo11} alt="HTML Logo" className="circular-logo" />
          <p>HTML</p>
        </div>
        <div className="logo-item">
          <img src={logo12} alt="CSS Logo" className="circular-logo" />
          <p>CSS</p>
        </div>
        <div className="logo-item">
          <img src={logo13} alt="JavaScript Logo" className="circular-logo" />
          <p>JAVA SCRIPT</p>
        </div>
        <div className="logo-item">
          <img src={logo14} alt="React Logo" className="circular-logo" />
          <p>REACT</p>
        </div>
        <div className="logo-item">
          <img src={logo15} alt="Figma Logo" className="circular-logo" />
          <p>FIGMA</p>
        </div>
        <div className="logo-item">
          <img src={logo16} alt="Bootstrap Logo" className="circular-logo" />
          <p>BS</p>
        </div>
      </div>
    </div>
  </div>

  <div className="logo-box-container">
    <div className="logo-container">
      <p className="logo-header">Others</p>
      <div className="logo-grid">
        <div className="logo-item">
          <img src={logo18} alt="CSS Logo" className="circular-logo" />
          <p>JAVA</p>
        </div>
        <div className="logo-item">
          <img src={logo19} alt="JavaScript Logo" className="circular-logo" />
          <p>SQL</p>
        </div>
        <div className="logo-item">
          <img src={logo17} alt="HTML Logo" className="circular-logo" />
          <p>SPRING BOOT</p>
        </div>
        <div className="logo-item">
          <img src={logo10} alt="React Logo" className="circular-logo" />
          <p>GIT HUB</p>
        </div>
        <div className="logo-item">
          <img src={logo111} alt="Figma Logo" className="circular-logo" />
          <p>REST API</p>
        </div>
        <div className="logo-item">
          <img src={logo112} alt="Bootstrap Logo" className="circular-logo" />
          <p>VS CODE</p>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

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
