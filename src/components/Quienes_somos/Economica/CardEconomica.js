import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardEconomica() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quienes_somos");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
   El área económica se encarga de generar los recursos necesarios para sostener y fortalecer nuestras actividades. A través de talleres, capacitaciones y eventos internos, buscamos financiar los materiales, herramientas y logística que el colectivo requiere para operar. Todo ingreso se reinvierte íntegramente en el club, garantizando que podamos seguir innovando y colaborando sin depender de apoyos externos. Creemos en la autosuficiencia y en el compromiso compartido como base para el crecimiento sostenible de nuestra comunidad.
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

export default CardEconomica;
