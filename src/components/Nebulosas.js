import React from "react";
import Particles from "react-tsparticles";

function Nebulosas() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120, // menos partículas pero más grandes
            density: {
              enable: true,
              area: 1800,
            },
          },
          color: {
            value: ["#a0a0a0", "#8b5e3c", "#5c3a21"], // gris y tonos de asteroides
          },
          shape: {
            type: ["circle", "edge"], // mezcla de círculos y cuadrados para simular rocas
          },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: false,
            },
          },
          size: {
            value: { min: 3, max: 10 }, // tamaño variable para asteroides
            random: true,
          },
          move: {
            enable: true,
            speed: 0.5, // velocidad moderada
            direction: "bottom-right", // dirección diagonal para simular cinturón
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: true, mode: "push" },
          },
          modes: { push: { quantity: 1 } },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Nebulosas;
