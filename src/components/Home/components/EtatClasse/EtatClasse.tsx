import React, { ReactNode } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function EtatClasseComponent({
  classe,
  professeur,
  places,
  inscrits,
  action,
}: {
  classe: string;
  professeur: string;
  places: number;
  inscrits: number;
  action: { voir: ReactNode; supprimer: ReactNode };
}) {
  const route = classe.split(" ").join("");
  return (
    <Link to={`/classes/${route}/eleves`} className="link">
      <div className="EtatClasseComponent">
        <span>{classe}</span>
        <span>{professeur}</span>
        <span>{inscrits}</span>
        <span>{places}</span>
        <div className="EtatClasseComponent-action">
          <span>{action.voir}</span>
          <span>{action.supprimer}</span>
        </div>
      </div>
    </Link>
  );
}

export default EtatClasseComponent;
