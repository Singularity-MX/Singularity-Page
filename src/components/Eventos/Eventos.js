import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEventos from "./EventosCard"; // Asegúrate que este sea el nombre correcto
import Particle from "../Particle";

import eventos from "./eventos.json";

function Eventos() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Consulta aquí nuestros próximos <strong className="purple">eventos</strong>.
        </h1>
        
         <Row style={{ justifyContent: "center", padding: "10px" }}>
                  <Col
                    md={8}
                    style={{
                      justifyContent: "center",
                      paddingTop: "0px",
                      paddingBottom: "0x",
                    }}
                  >
                      <p style={{ color: "white" }}>
          Descubre las actividades, talleres y encuentros que tenemos preparados para ti. Participa, aprende y colabora en nuestras iniciativas diseñadas para impulsar la innovación y el crecimiento de nuestra comunidad.
        </p>
                  </Col>
                 
                </Row>
                
      
        <Particle />
      </Container>
      <br />
      <Container>
        <Row className="justify-content-center g-3" style={{ paddingTop: '10px' }}>
         {eventos
  .filter(evento => evento.visible !== false)  // Solo muestra si visible es true o no está definido
  .map((evento, idx) => (
    <Col key={idx} xs={12} sm={6} md={4} lg={3}>
      <CardEventos
        title={evento.title}
        description={evento.description}
        imgSrc={evento.imgSrc}
        dateTime={evento.dateTime}
        location={evento.location}
        modality={evento.modality}
        registrationLink={evento.registrationLink}
        members={evento.members}
        end={evento.end}
        linkPhotos={evento.linkPhotos}
        type={evento.type_event}
      />
    </Col>
))}

        </Row>
      </Container>
    </Container>
  );
}

export default Eventos;
