import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function Nodos() {
  const nodos = [
    {
      nombre: "Singularity_Leon",
      region: "León",
      estado: "Guanajuato",
      lideres: [
        { nombre: "Cesar Delgado", link: "https://github.com/cessdel" },
        { nombre: "Javier Gutiérrez", link: "https://github.com/ReplacedSpace17" }
      ],
      fecha: "03/02/2023"
    }
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Nuestra sede principal se encuentra en León, Guanajuato, y operamos bajo un modelo de nodos regionales, cada uno enfocado en atender las problemáticas y oportunidades específicas de su localidad. Si te interesa participar, puedes postularte para integrarte al nodo más cercano o contactarnos para iniciar tu propio nodo en tu ciudad. Cada nodo es liderado por miembros comprometidos que, anualmente, son evaluados en función de su impacto comunitario, las actividades organizadas y los proyectos desarrollados o implementados. Buscamos personas mayores de 18 años con vocación social y formación o interés en áreas como tecnología (software, hardware, electrónica, inteligencia artificial), administración y economía social, ciencias sociales y humanidades, así como comunicación, diseño o medios digitales. Las convocatorias para nuevos miembros se abren de manera bimestral.
          </p>

          <Table striped bordered hover responsive className="mt-4" style={{ backgroundColor: "#1c1c1c", color: "white", borderRadius: "10px", overflow: "hidden" }}>
            <thead style={{ backgroundColor: "#6f42c1", color: "white" }}>
              <tr>
                <th>Nodo</th>
                <th>Región</th>
                <th>Estado</th>
                <th>Líderes</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {nodos.map((nodo, index) => (
                <tr key={index}>
                  <td>{nodo.nombre}</td>
                  <td>{nodo.region}</td>
                  <td>{nodo.estado}</td>
                  <td>
                    {nodo.lideres.map((lider, idx) => (
                      <a
                        key={idx}
                        href={lider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9f86ff", textDecoration: "none" }}
                      >
                        {lider.nombre}
                        {idx < nodo.lideres.length - 1 && " / "}
                      </a>
                    ))}
                  </td>
                  <td>{nodo.fecha}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Nodos;
