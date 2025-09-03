import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { BsGithub } from "react-icons/bs";

function ProjectCard({ title, description, imgSrc, githubLink, active, nodo }) {
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
      <div 
        style={{ 
          position: 'relative', 
          height: '150px',      // Reducido a 1/3 aprox del card
          overflow: 'hidden', 
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: 'black',
          marginBottom: '10px'  // Margen inferior para separar imagen del contenido
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
        {active && (
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
            Activo
          </span>
        )}
      </div>

      <Card.Body 
        style={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          paddingTop: '8px'  // Padding superior para que no quede pegado al div de la imagen
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ flexGrow: 1, textAlign: 'justify', fontSize: '0.9rem' }}>
          {description}
        </Card.Text>
        {nodo && (
          <Badge bg="secondary" style={{ marginBottom: '10px', alignSelf: 'flex-start' }}>
            Nodo: {nodo}
          </Badge>
        )}
        <Button
          variant="primary"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub /> &nbsp; Ver en GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
