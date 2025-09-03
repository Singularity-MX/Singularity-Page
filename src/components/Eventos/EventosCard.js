import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaRegCalendarAlt, FaRegEye } from "react-icons/fa";

function CardEventos({ 
  title, 
  description, 
  dateTime, 
  location, 
  modality, 
  imgSrc, 
  registrationLink, 
  members,
  visible,
  end,
  linkPhotos,
  type
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
        padding: 0,
        overflow: 'hidden',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      {/* Imagen superior */}
      <div 
        style={{ 
          position: 'relative', 
          height: '150px',
          overflow: 'hidden', 
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: 'black',
          marginBottom: '10px',
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          style={{ 
            display: 'block',
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
          }}
        />
        {members && (
          <span 
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'rgba(40, 167, 69, 0.85)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: '600',
              zIndex: 10,
              userSelect: 'none',
            }}
          >
            Solo miembros
          </span>
        )}
      </div>
      
      {/* Contenido */}
      <Card.Body 
        style={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          paddingTop: '8px'
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ flexGrow: 1, textAlign: 'justify', fontSize: '0.9rem' }}>
          {description}
        </Card.Text>
        
        {/* Badges */}
        <div style={{ marginBottom: '12px' }}>
          {type && (
            <Badge bg="primary" style={{ marginRight: '6px' }}>{type}</Badge>
          )}
          <Badge bg="secondary" style={{ marginRight: '6px' }}>{dateTime}</Badge>
          <Badge bg="info" text="dark" style={{ marginRight: '6px' }}>{location}</Badge>
          <Badge bg="warning" text="dark">{modality}</Badge>
        </div>

        {/* Botón condicional */}
        <Button 
          variant="primary" 
          href={end ? linkPhotos : registrationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ cursor: 'pointer' }}
        >
          {end ? <FaRegEye /> : <FaRegCalendarAlt />} &nbsp; 
          {end ? 'Ver fotos' : 'Registrarse'}
        </Button>
        
      </Card.Body>
    </Card>
  );
}

export default CardEventos;
