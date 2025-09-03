import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import CardGestion_interna from "./CardGestion";
import Toolstack from "../Actividades";
function AreaGestion() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10} // Cambié de 7 a 6 para ajustar el ancho
            style={{
  justifyContent: "center",
 
}}

          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Área de <strong className="purple">Gestión Interna</strong>: Creciendo desde adentro
            </h1>
            <CardGestion_interna />
          </Col>
          
        </Row>
      </Container>
      <br />
      <Toolstack/>
    </Container>
  );
}

export default AreaGestion;
