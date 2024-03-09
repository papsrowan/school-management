import React from "react";
import "./style.scss";

import { mockInputForm } from "../../utils/InputForm/mockInput";
import InputForm from "../../components/InputForm/InputForm";

const AjouterEleve = () => {
  return (
    <div className="containerAjouterEleve">
      {mockInputForm.map((el, idx) => (
        <InputForm key={idx} {...el} />
      ))}
    </div>
  );
};

export default AjouterEleve;
