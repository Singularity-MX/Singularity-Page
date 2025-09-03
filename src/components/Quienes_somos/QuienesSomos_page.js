import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Toolstack from "./Actividades";

//chidos
import Que_Es from "./Card_que_es";
import Historia from "./Historia";
import Filosofia from "./Filosofia";
import Area_Accion from "./Area_accion";
import Nodos from "./Nodos";

function Quienes_somos() {
  return (
    <Container fluid className="about-section">
      <Particle />
      
      {/* ------------------------------------------------------------- que es----------------------------------------------------------- */}
       <Container>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            ¿Que es <strong className="purple">Singularity</strong>?
            </h1>
            <Que_Es />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", 
              display: "flex", justifyContent: "center", alignItems: "center" }}
            className="about-img"
          >
            <img src="/assets/logo.png" alt="about" className="img-fluid" style={{width: "55%", height: "auto"}}/>
          </Col>
        </Row>
        
        
        
      </Container>
       {/* -------------------------------------------------------------NODOS ACTIVOS----------------------------------------------------------- */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Ubica los <strong className="purple"> nodos</strong> del club.
            </h1>
            <Nodos />
          </Col>
         
        </Row>
        
      </Container>
      {/* ------------------------------------------------------------- Historia del Club----------------------------------------------------------- */}
       <Container>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Explora nuestra <strong className="purple">historia</strong>.
            </h1>
             <Historia />
          </Col>
          
        </Row>
       


      </Container>
      {/* -------------------------------------------------------------Filosofía----------------------------------------------------------- */}

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Descubre nuestra <strong className="purple">filosofía</strong>.
            </h1>
            <Filosofia />
          </Col>
          
        </Row>
        
        
      </Container>

      {/* -------------------------------------------------------------ÁREAS DE ACCIÓN----------------------------------------------------------- */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Nuestras áreas de <strong className="purple"> acción</strong>.
            </h1>
            <Area_Accion />
          </Col>
         
        </Row>
        
        
        <Toolstack />

       
      </Container>
     
     
      
    
    </Container>
  );
}

export default Quienes_somos;
