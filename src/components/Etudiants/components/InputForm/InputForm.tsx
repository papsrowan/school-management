import React, { ReactNode } from "react";
import "./style.scss";

export type TInput = {
  label: string;
  inputType: "text" | "email";
  icon: ReactNode;
};

const InputForm = (dataInput: TInput) => {
  return (
    <>
      <div className="containerInput">
        <label>{dataInput.label}</label>
        <div>
          <input type={dataInput.inputType} placeholder={dataInput.label} />{" "}
          <span>{dataInput.icon}</span>
        </div>
      </div>
    </>
  );
};

export default InputForm;
