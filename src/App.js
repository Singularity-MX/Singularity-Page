import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";

import Quienes_somos from "./components/Quienes_somos/QuienesSomos_page";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AreaTecnolgica from "./components/Quienes_somos/Tecnologica/Tecnologica";
import Area_social from "./components/Quienes_somos/social/Social";
import AreaEconomica from "./components/Quienes_somos/Economica/Economica";
import AreaDifusion from "./components/Quienes_somos/Difusion/Difusion";
import AreaGestion from "./components/Quienes_somos/Gestion_interna/Gesion";
import Roadmap from "./components/RoadMap/Roadmap";
import Proyectos from "./components/Proyectos/Proyectos";
import Eventos from "./components/Eventos/Eventos";
import Contacto from "./components/Contacto/Contacto";

import TiempoRestante from "./components/timer/Timer";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Roadmap />} />
          <Route path="/quienes_somos" element={<Quienes_somos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Rutas para las áreas de Quienes Somos */}
      
          <Route path="*" element={<Navigate to="/"/>} />

          <Route path="/quienes_somos/tecnologica" element={<AreaTecnolgica />} />
          <Route path="/quienes_somos/social" element={<Area_social />} />
          <Route path="/quienes_somos/economica" element={<AreaEconomica />} />
          <Route path="/quienes_somos/difusion" element={<AreaDifusion />} />
          <Route path="/quienes_somos/gestion" element={<AreaGestion />} />


          <Route path="/roadmap" element={<Roadmap />} />

          

          <Route path="/timer" element={<TiempoRestante />} />


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
