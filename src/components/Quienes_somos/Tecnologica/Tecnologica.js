import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import CardTecnologia from "./CardTecnologia";
import Toolstack from "../Actividades";

function AreaTecnolgica() {
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
              Área <strong className="purple">Tecnológica</strong>: Innovación que transforma
            </h1>
            <CardTecnologia />
          </Col>
          
        </Row>
       
      </Container>
     <br />
       <Toolstack/>
    </Container>
  );
}

export default AreaTecnolgica;
