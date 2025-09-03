import React from "react";
import Card from "react-bootstrap/Card";

function Filosofia() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{ color: "#6f42c1" }}>Misión</h3>
          <p style={{ textAlign: "justify" }}>
            Impulsar la innovación comunitaria a través de proyectos tecnológicos abiertos, promoviendo la ciencia abierta y la colaboración interdisciplinaria. Buscamos formar y empoderar a nuestros miembros mediante el aprendizaje práctico, generando soluciones de código libre que aborden problemáticas reales de nuestra comunidad.
          </p>

          <h3 style={{ color: "#6f42c1" }}>Visión</h3>
          <p style={{ textAlign: "justify" }}>
            Consolidar una red descentralizada de nodos Singularity que, desde distintos puntos geográficos, contribuya al desarrollo tecnológico local con impacto social global. Aspiramos a ser un referente en la generación de conocimiento abierto y transferencia tecnológica libre, fomentando la creatividad y el compromiso social.
          </p>

          <h3 style={{ color: "#6f42c1" }}>Público objetivo</h3>
          <p style={{ textAlign: "justify" }}>
            Personas mayores de 18 años interesadas en participar activamente en la creación y desarrollo de tecnología abierta, con habilidades o inquietudes en programación, electrónica, inteligencia artificial, diseño, comunicación o gestión social, que busquen aprender y aportar en un entorno colaborativo y multidisciplinario.
          </p>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "La ciencia es la creencia en la ignorancia de los expertos." 
          </p>
          <footer className="blockquote-footer">Richard Feynman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Filosofia;
