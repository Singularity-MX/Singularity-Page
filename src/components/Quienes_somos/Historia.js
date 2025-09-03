import React from "react";
import Card from "react-bootstrap/Card";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaFlask,
  FaRocket,
  FaGlobe,
  FaSatellite,
  FaBiohazard,
} from "react-icons/fa";
import Swal from "sweetalert2";

function Historia() {
  const mostrarAlerta = (titulo, texto, img) => {
    Swal.fire({
      
      text: texto,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: titulo,
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Singularity nació el 5 de febrero de 2023 en León, Guanajuato, México,
              como un espacio colaborativo y abierto para impulsar proyectos tecnológicos y sociales con impacto real en la comunidad.
              Inspirados por el movimiento global de los clubes DIY Bio, trasladamos esa filosofía al ámbito tecnológico, fomentando
              la ciencia abierta , la innovación frugal y la
               colaboración interdisciplinaria .
              <br /><br />
              Desde el inicio adoptamos un modelo descentralizado basado en “nodos”, donde cada sede identifica y resuelve
              problemáticas locales mediante soluciones de código abierto y transferencia de conocimiento.
              Esta estructura nos permite ser escalables, adaptables y guiados por las ideas de nuestros propios miembros.
              <br /><br />
              Nuestra misión es contribuir activamente al ecosistema
               open source creando soluciones tecnológicas que puedan ser replicadas y mejoradas por cualquiera.
              Creemos que la mejor forma de aprender es haciendo . Por eso, nuestros miembros colaboran
              en equipo para diseñar, desarrollar y documentar proyectos que mezclan 
               programación, electrónica, inteligencia artificial, prototipado y automatización , siempre con
              un enfoque práctico y orientado al impacto social.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <br />
      {/* Línea de tiempo */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0D47A1", color: "#fff", cursor: "pointer" }}
          contentArrowStyle={{ borderRight: "7px solid #0D47A1" }}
          date="2023 - Mayo, Septiembre"
          iconStyle={{ background: "#0D47A1", color: "#fff" }}
          icon={<FaFlask />}
          onTimelineElementClick={() =>
            mostrarAlerta(
              "InnovaTecNM 2023",
              "Desarrollo de dos proyectos tecnológicos, ambos llegaron a la fase regional en Pátzcuaro, Michoacán, participando con 2 equipos miembros del club.",
              "/assets/Timeline/1.webp"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">InnovaTecNM 2023</h3>
          <h5 className="vertical-timeline-element-subtitle">León, México</h5>
          <p>
            Desarrollo de dos proyectos tecnológicos, ambos llegaron a la fase regional en Pátzcuaro, Michoacán, participando con 2 equipos miembros del club.
          </p>
          <br />
          <button
           
            style={{
              backgroundColor: "#0D47A1",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Click para ver más...
          </button>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1B5E20", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1B5E20" }}
          date="2023 - Octubre"
          iconStyle={{ background: "#1B5E20", color: "#fff" }}
          icon={<FaRocket />}
          onTimelineElementClick={() =>
            mostrarAlerta(
              "NASA Space Apps Challenge – 2023",
              'Participación en la Universidad Aeronáutica de Querétaro, en el reto de "Building the Space Biology “Model Zoo”.',
              "/assets/Timeline/2.webp"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">NASA Space Apps Challenge – 2023</h3>
          <h5 className="vertical-timeline-element-subtitle">Querétaro, México</h5>
          <p>
            Participación en la Universidad Aeronáutica de Querétaro, en el reto de "Building the Space Biology “Model Zoo”.
          </p>
          <br />
          <button
            
            style={{
              backgroundColor: "#1B5E20",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Click para ver más...
          </button>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#B71C1C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #B71C1C" }}
          date="2024 - Mayo"
          iconStyle={{ background: "#B71C1C", color: "#fff" }}
          icon={<FaGlobe />}
          onTimelineElementClick={() =>
            mostrarAlerta(
              "InnovaTecNM 2024",
              "Participación en el evento InnovaTecNM 2024, donde se presentaron 3 proyectos, uno a nivel de posgrado y los otros 2 en licenciatura desarrollados por los miembros del club.",
              "/assets/Timeline/3.webp"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">InnovaTecNM 2024</h3>
          <h5 className="vertical-timeline-element-subtitle">León, México</h5>
          <p>
            Participación en el evento InnovaTecNM 2024, donde se presentaron 3 proyectos, uno a nivel de posgrado y los otros 2 en licenciatura desarrollados por los miembros del club.
          </p>
          <br />
          <button
            
            style={{
              backgroundColor: "#B71C1C",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Click para ver más...
          </button>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#4A148C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4A148C" }}
          date="2024 - Octubre"
          iconStyle={{ background: "#4A148C", color: "#fff" }}
          icon={<FaSatellite />}
          onTimelineElementClick={() =>
            mostrarAlerta(
              "NASA Space Apps Challenge – 2024",
              'Participación en el evento NASA Space Apps Challenge – 2024, participando en la Universidad Tecnológica de León, en el reto de "Create an Orrery Web App that Displays Near-Earth Objects".',
              "/assets/Timeline/4.webp"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">NASA Space Apps Challenge – 2024</h3>
          <h5 className="vertical-timeline-element-subtitle">León, México</h5>
          <p>
            Participación en el evento NASA Space Apps Challenge – 2024, participando en la Universidad Tecnológica de León, en el reto de "Create an Orrery Web App that Displays Near-Earth Objects".
          </p>
          <br />
          <button
           
            style={{
              backgroundColor: "#4A148C",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Click para ver más...
          </button>
        </VerticalTimelineElement>

       
      </VerticalTimeline>
    </>
  );
}

export default Historia;
