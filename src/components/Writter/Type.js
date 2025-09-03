import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
       
          "Open Source",
          "Ciencia abierta",
          "Do It Yourself Bio",
          "Hack the Planet",

       
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;