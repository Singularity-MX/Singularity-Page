import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardDifusion() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quienes_somos");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    El área de difusión se encarga de dar visibilidad a nuestros proyectos, actividades y logros, asegurando que el conocimiento y las oportunidades lleguen a más personas. Utilizamos medios digitales, redes sociales, talleres y eventos para compartir avances, inspirar a la comunidad y fortalecer la participación. Creemos que la innovación solo cobra sentido cuando se comparte, por eso nuestra comunicación es abierta, clara y orientada a generar colaboración e impacto positivo.
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

export default CardDifusion;
