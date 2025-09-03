import Card from 'react-bootstrap/Card';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

function Card_contacto({ 
  title, 
  description, 
  imgSrc, 
  facebook, 
  instagram, 
  tiktok, 
  gmail, 
  github, 
  twitter 
}) {
  return (
    <Card 
      style={{ 
        width: '100%', 
        maxWidth: '18rem', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        margin: '0 auto', 
        padding: 0,       // Quitar padding para que imagen llegue al borde
        overflow: 'hidden',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Contenedor imagen sin margen ni padding, altura fija */}
      <div 
        style={{ 
          position: 'relative', 
          height: '150px', 
          width: '100%',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          backgroundColor: 'black',  // opcional para visualización durante carga
          marginBottom: '10px',       // separar imagen del contenido
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          style={{ 
            display: 'block',  // elimina espacios blancos debajo de img inline
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Cuerpo del Card */}
      <Card.Body style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', paddingTop: '8px' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ flexGrow: 1, textAlign: "justify", fontSize: '0.9rem' }}>
          {description}
        </Card.Text>

        {/* Sección de iconos */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', fontSize: '1.5rem' }}>
              <FaFacebook />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontSize: '1.5rem' }}>
              <FaInstagram />
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', fontSize: '1.5rem' }}>
              <FaTiktok />
            </a>
          )}
          {gmail && (
            <a href={`mailto:${gmail}`} style={{ color: '#D44638', fontSize: '1.5rem' }}>
              <FaEnvelope />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '1.5rem' }}>
              <FaGithub />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', fontSize: '1.5rem' }}>
              <FaTwitter />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card_contacto;
