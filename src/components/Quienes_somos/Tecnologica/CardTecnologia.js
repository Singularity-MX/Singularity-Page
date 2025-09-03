import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardTecnologia() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quienes_somos");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    En el área tecnológica impulsamos la creatividad aplicada a resolver problemas reales mediante el desarrollo de soluciones innovadoras. 
    Aquí convergen la programación, la inteligencia artificial, la robótica, el prototipado y otras ramas de la ingeniería para materializar ideas que generan impacto. 
    Participamos activamente en hackathones, competencias y proyectos colaborativos que fomentan la ciencia abierta, el trabajo en equipo y la transferencia de conocimiento, 
    convirtiendo cada reto en una oportunidad para aprender, innovar y transformar nuestro entorno.
  </p>

  
<br />
  <button className="returnMemorialBTN" onClick={handleReturn}>
    Regresar
  </button>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default CardTecnologia;
