import React, { ReactNode } from "react";
import "./style.scss";

type Tfilter = {
  tilte: string;
  icon: ReactNode;
  filter: string | string[];
};

const FiltreEnseignants = (data: Tfilter) => {
  return (
    <div className="filtreElevesContainer">
      <div>{data.icon}</div>
      <div>
        <span className="title">{data.tilte}</span>
        {typeof data.filter === "string" ? (
          <span>{data.filter}</span>
        ) : (
          <select name="" id="">
            {data.filter.map((el, idx) => (
              <option value={el} key={idx}>
                {el}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default FiltreEnseignants;
