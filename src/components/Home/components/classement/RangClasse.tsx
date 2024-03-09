import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import './style.scss'
function RangClasse({
  route,
  icon,
  text,
  moyenne,
  evolution,
  style
}: {
  route: string;
  icon: ReactNode;
  text: string;
  moyenne: string
  evolution: ReactNode
  style: string
}) {
  return (
    <>
        <Link to={route} className="rangClasseContainer">
          <div>{icon}</div>
          <div>{text}</div>
          <div>{moyenne}</div>
          <div className={style}>{evolution}</div>
        </Link>
    </>
  );
}

export default RangClasse;
