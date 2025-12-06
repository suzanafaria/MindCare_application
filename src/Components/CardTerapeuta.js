import React from "react";
import "./CardTerapeuta.css";
import { Avatar, Button } from "@mui/material";

const CardTerapeuta = ({ terapeuta, onViewProfile }) => {
  const handleButtonClick = () => {
    if (onViewProfile) {
      onViewProfile(terapeuta);
    }
  };

  return (
    <div className="therapist-card-container" key={terapeuta.id}>
      <div className="therapist-card">
        <div className="card-content-wrapper">
          <div className="therapist-details">
            <Avatar
              alt={terapeuta.name}
              sx={{ width: 56, height: 56, mr: 2, flexShrink: 0 }}
            />
            <div className="therapist-info">
              <p className="therapist-name">{terapeuta.name}</p>
              <p className="therapist-approach">{terapeuta.approach}</p>
            </div>
          </div>
          <div className="append-buttons">
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={handleButtonClick}
              className="profile-button"
            >
              Ver Perfil
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="schedule-button"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTerapeuta;
