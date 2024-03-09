import React from "react";
import "./style.scss";

import { mockInputForm } from "../../utils/InputForm/mockInput";
import InputForm from "../../components/InputForm/InputForm";

const AjouterEleve = () => {
  return (
    <form className="containerAjouterEleve">
      {mockInputForm.map((el, idx) => (
        <InputForm key={idx} {...el} />
      ))}
      <div>
          <label>Genre</label>
          <div>
            Femme<input name="genre" type="radio"/>{" "}
            Home<input name="genre" type="radio"/>{" "}
          </div>
        </div>
      <div>
          <label>Profile photo</label>
          <div>
            <input type="file"/>{" "}
          </div>
        </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AjouterEleve;
