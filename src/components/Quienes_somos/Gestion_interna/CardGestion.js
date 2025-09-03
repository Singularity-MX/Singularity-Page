import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardGestion_interna() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quienes_somos");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
   El área de gestión interna está dedicada a fortalecer las capacidades y el sentido de comunidad de nuestros miembros. Organizamos talleres, capacitaciones, charlas y actividades formativas diseñadas para potenciar habilidades técnicas, creativas y de liderazgo. Este espacio fomenta la colaboración, el aprendizaje continuo y la cohesión del equipo, asegurando que cada integrante cuente con las herramientas necesarias para contribuir de manera efectiva a los proyectos y metas del club.
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

export default CardGestion_interna;
