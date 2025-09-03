import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Que_Es() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Es un colectivo tecnológico abierto y sin fines de lucro que impulsa 
   proyectos de innovación y desarrollo de código abierto para resolver problemáticas 
  reales de nuestra comunidad. Nuestra misión es contribuir activamente al ecosistema 
   open sourcecreando soluciones tecnológicas que puedan ser replicadas y mejoradas por cualquiera.
  <br /><br />
  Creemos que la mejor forma de aprender es haciendo. Por eso, nuestros miembros colaboran 
  en equipo para diseñar, desarrollar y documentar proyectos que mezclan programación, electrónica, 
  inteligencia artificial, prototipado y automatización, siempre con un enfoque práctico y orientado al impacto social.
  <br /><br />
  
</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Que_Es;
