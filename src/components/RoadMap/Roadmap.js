import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import './Roadmap.css';
import Type from "../Writter/Type";
import HomStars from '../HomeStars';
import Nebulosas from '../Nebulosas';
import { deploy } from '../../config';
import TiempoRestante from '../timer/Timer';

function Roadmap() {
  const parallax = useRef(null);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animación inicial
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll automático
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (parallax.current) {
        const currentOffset = parallax.current.offset;
        const nextPage = (currentOffset + 1) % 4;
        parallax.current.scrollTo(nextPage);
      }
    }, 6000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className='containerParallax'>
      <Parallax ref={parallax} pages={1}>
        <HomStars />
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading">
                  ¡Hello world!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">🚀</span>
                </h1>
                <h1 className="heading-name">
                  BIENVENIDOS A <br />
                  <strong className="main-name"> SINGULARITY</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ marginBottom: 50, marginTop: 50, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={logo}
                  alt="home pic"
                  className="zoom"
                  style={{ width: "50%" }}
                />
              </Col>
            </Row>

            {/* Mostrar timer solo si no es móvil */}
            {!isMobile && deploy && (
              <div className='contador' style={{ marginTop: "20px" }}>
                <TiempoRestante />
              </div>
            )}

          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Roadmap;
