import React from "react";
import Particles from "react-tsparticles";

function HomStars() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent", // Fondo oscuro tipo universo
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 300, // más partículas
            density: {
              enable: true,
              area: 1900,
            },
          },
          color: {
            value: ["#ffffff", "#b0c4ff", "#8a2be2"], // blanco y tonos azul violeta
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1.2,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default HomStars;
