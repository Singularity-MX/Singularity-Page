import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { MdOutlineScience, MdOutlineSettings } from "react-icons/md";
import { GiHealthNormal, GiMoneyStack } from "react-icons/gi";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdOutlineSick } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { FaBullhorn, FaUsers } from "react-icons/fa";
function Toolstack() {
  const navigate = useNavigate();

  const handleTecnologica = () => {
    navigate("/quienes_somos/tecnologica");
  };
  const handleSocial = () => {
    navigate("/quienes_somos/social");
  };
  const handleEconomica = () => {
    navigate("/quienes_somos/economica");
  };
  const handleDifusion = () => {
    navigate("/quienes_somos/difusion");
  };
  const handleGestion = () => {
    navigate("/quienes_somos/gestion");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", paddingBottom: "50px" }}>
      <div className="tech-icons" onClick={handleTecnologica}>
        <MdOutlineScience className="icon-image" />
        <p className="icon-text">Tecnológica</p>
      </div>
      <div className="tech-icons" onClick={handleSocial}>
        <FaUsers className="icon-image" />
        <p className="icon-text">Social</p>
      </div>
      <div className="tech-icons" onClick={handleEconomica}>
        <GiMoneyStack className="icon-image" />
        <p className="icon-text">Económica</p>
      </div>
      <div className="tech-icons" onClick={handleDifusion}>
        <FaBullhorn className="icon-image" />
        <p className="icon-text">Difusión</p>
      </div>
      <div className="tech-icons" onClick={handleGestion}>
        <MdOutlineSettings className="icon-image" />
        <p className="icon-text">Gestión Interna</p>
      </div>
    </div>
  );
}

export default Toolstack;
