import React from "react";
import "./style.scss";

const DetailsChangePasseWord = () => {
  return (
    <div className="DetailPassWord-container">
      <div>
        <div className="DetailPassWord-containe-info">
          <span>Nouveau Mot de passe :</span>
          <input
            type="password"
            name=""
            id=""
            placeholder="********"
            disabled
          />
        </div>
        <div className="DetailPassWord-containe-info">
          <span>Confirmer Mot de passe :</span>
          <input
            type="password"
            name=""
            id=""
            placeholder="*******"
            disabled
          />
        </div>
        <div className="DetailPassWord-containe-info">
          <span>Recent Mot de passe : </span>
          <input type="password" name="" id="" placeholder="*******" disabled />
        </div>
          <button className="button">Modifier</button>
      </div>
    </div>
  );
};

export default DetailsChangePasseWord;
