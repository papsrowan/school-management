import React from "react";
import "./styles.scss";

import InputForm from "../../components/InputForm/InputForm";
import { mockInputForm } from "../../utils/inputForm/mockInput";

const AjouterEnseignants = () => {
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

export default AjouterEnseignants;
