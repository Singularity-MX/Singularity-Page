import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { VscDebugStart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { deploy } from '../../config';
import proyectos from "./proyectos.json";


function Proyectos() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/quiz/game");
  };

  const now = new Date();
  const targetDate = new Date('2024-11-01T12:00:00');
  const showContainer = deploy === false || (deploy === true && now >= targetDate);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          ¡Explora nuestros <strong className="purple">proyectos</strong> más destacados!
        </h1>
        <br />
        <p style={{ color: "white" }}>
          Explora cada iniciativa para descubrir cómo la innovación y el trabajo colaborativo transforman nuestra comunidad.
        </p>
       
        <Particle />
      </Container>
<br/>
<Container>
<Row className="justify-content-center g-3" style={{ paddingTop: '10px' }}>
  {proyectos.map((proyecto, idx) => (
    <Col 
      key={idx} 
      xs={12} sm={6} md={4} lg={3}
    >
      <ProjectCard
        title={proyecto.title}
        description={proyecto.description}
        imgSrc={proyecto.imgSrc}
        githubLink={proyecto.githubLink}
        active={proyecto.active}
        nodo={proyecto.nodo}
      />
    </Col>
  ))}
</Row>

</Container>

    </Container>
  );
}

export default Proyectos;
