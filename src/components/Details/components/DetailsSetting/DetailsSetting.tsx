import React from 'react'
import "./style.scss"

const DetailsSetting = () => {
  return (
    <div className="DetailPassWord-container">
    <div>
      <div className="DetailPassWord-containe-info">
        <span>Nouveau Mot de passe :</span>
        <input
          type="password"
          name=""
          id=""
          placeholder="eefggfgf"
          disabled
        />
      </div>
      <div className="DetailPassWord-containe-info">
        <span>Prenom :</span>
        <input
          type="password"
          name=""
          id=""
          placeholder="defdfdsdgdsd"
          disabled
        />
      </div>
      <div className="DetailPassWord-containe-info">
        <span>Classe : </span>
        <input type="password" name="" id="" placeholder="fddg" disabled />
      </div>
        <button className="button">Modifier</button>
    </div>
  </div>
  )
}

export default DetailsSetting
