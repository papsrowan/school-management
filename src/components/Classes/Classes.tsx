import { FaArrowCircleRight } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AjouterClasse from "./Pages/AjouterClasse/AjouterClasse";
import VoirClasse from "./Pages/VoirClasse/VoirClasse";
import "./styles.scss";

const Classes = () => {
  const location = useLocation();
  const tableLocation = location.pathname.split('/')
  return (
    <div className="classeContainer">
      <div>
        <FaArrowCircleRight /> Classes page/
      </div>

      <div className="classeContainer-blockClasse">
        <div>
          <Link
            to="/classes"
            className={`navLink ${tableLocation[2] !== 'ajouter' ? "active" : ""}`}
          >
            Voir Classe
          </Link>
          <Link
            to="/classes/ajouter"
            className={`navLink ${tableLocation[2] === 'ajouter' ? "active" : ""}`}
          >
            Ajouter une classe
          </Link>
        </div>

        <div className="classeContainer-blockDetails">
          <Routes>
            <Route path="/*" element={<VoirClasse />} />
            <Route path="ajouter" element={<AjouterClasse />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Classes;
