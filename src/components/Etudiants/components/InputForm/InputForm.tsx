import React, { ReactNode } from "react";
import "./style.scss";

export type TInput =
  | {
      label: string;
      inputType: "text" | "email" | "phone";
      icon: ReactNode;
    }
  | {
      label: string;
      inputType: "select";
      option: {
        option: string;
      }[];
    };

const InputForm = (dataInput: TInput) => {
  return (
    <>
      {dataInput.inputType === "select" ? (
        <div className="containerInput">
          <label>{dataInput.label}</label>
          <select>
            {dataInput.option.map((el, key) => (
              <option value={el.option}>{el.option}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="containerInput">
          <label>{dataInput.label}</label>
          <div>
            <input type={dataInput.inputType} placeholder={dataInput.label} />{" "}
            <span>{dataInput.icon}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default InputForm;
