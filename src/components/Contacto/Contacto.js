import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card_contacto from "./Card_Contacto"; // Asegúrate que este sea el nombre correcto
import Particle from "../Particle";

function Contacto() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Información de <strong className="purple">contacto</strong>.
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <p style={{ color: "white", textAlign: "center" }}>
              Ponte en contacto con nosotros para resolver dudas, proponer
              colaboraciones o unirte a nuestras iniciativas.  
              Estamos disponibles en redes sociales y correo electrónico.
            </p>
          </Col>
        </Row>
                
        <Particle />
      </Container>
      <br />
      <Container>
        <Row className="justify-content-center g-3" style={{ paddingTop: '10px' }}>
          <Card_contacto
            title="Club de Innovación y Tecnología"
            description="Síguenos en nuestras redes sociales para mantenerte al tanto de nuestras actividades, eventos y oportunidades de colaboración."
            imgSrc="/assets/Events/logo2.webp"
            facebook="https://www.facebook.com/Singularity.py/"
            instagram="https://www.instagram.com/singularity.open/"
            tiktok="https://www.tiktok.com/@singularity_open"
            gmail="replacedspace17@singularitymx.org"
            github="https://github.com/Singularity-MX"
            twitter="https://twitter.com/hub_singularity"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Contacto;
