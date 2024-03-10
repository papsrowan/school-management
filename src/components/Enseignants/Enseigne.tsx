import { FaArrowCircleRight } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./style.scss";
import AjouterEnseignants from "./pages/AjouterEnseignants/AjouterEnseignants";
import Enseignants from "./pages/Enseignants/Enseignants";

const Enseigne = () => {
  const location = useLocation().pathname.split("/");
  return (
    <div className="elevesContainner">
      <div>
        <FaArrowCircleRight /> Enseignants page/
      </div>

      <div className="elevesContainer-blockEleves">
        <div>
          <Link
            to="/eleves"
            className={`navLink ${location[2] === "ajouter" ? "" : "active"}`}
          >
            Liste Enseignants
          </Link>
          <Link
            to="/eleves/ajouter"
            className={`navLink  ${location[2] === "ajouter" ? "active" : ""}`}
          >
            Ajouter un enseignant
          </Link>
        </div>

        <div className="elevesContainer-blockDetails">
          <Routes>
            <Route index element={<Enseignants/>} />
            <Route path="/ajouter" element={<AjouterEnseignants/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Enseigne;
