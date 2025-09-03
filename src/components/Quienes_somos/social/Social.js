import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Toolstack from "../Actividades";
import Card_social from "./CardSocial";


function Area_social() {
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
              Área <strong className="purple">Social</strong>: Conectando personas, compartiendo conocimiento
            </h1>
            <Card_social />
          </Col>
         
        </Row>
      </Container>
      <br />
      <Toolstack/>
    </Container>
  );
}

export default Area_social;
