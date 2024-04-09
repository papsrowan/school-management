import React from "react";
import "./style.scss";

const DetailsInformation = () => {
  return (
    <div className="DetailInfo-container">
      <div>
        <div className="Details-containe-info">
          <span>Name :</span>
          <span>Etame Eboa</span>
        </div>
        <div className="Details-containe-info">
          <span>Prenom :</span>
          <span>yann rowan</span>
        </div>
        <div className="Details-containe-info">
          <span>Classe : </span>
          <span>Tle C</span>
        </div>
        <div className="Details-containe-info">
          <span>Date de Naissance :</span>
          <span>7/02/2002</span>
        </div>
        <div className="Details-containe-info">
          <span>Matricule : </span>
          <span>78798GHG</span>
        </div>
        <div className="Details-containe-info">
          <span>Loisir : </span>
          <span>Lecture</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsInformation;
