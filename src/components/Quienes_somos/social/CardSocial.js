import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Card_social() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quienes_somos");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En el área social fomentamos la interacción y el compañerismo entre miembros del club, creando un espacio donde las relaciones humanas fortalecen los proyectos tecnológicos. 
            Promovemos actividades que impulsan la colaboración, el intercambio de ideas y la transferencia de software o desarrollos propios, asegurando que el conocimiento y las soluciones creadas puedan beneficiar a más personas y comunidades. 
            Aquí, la amistad y el trabajo en equipo son la base para construir un ecosistema de innovación abierto y solidario.
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

export default Card_social;
