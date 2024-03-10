import { FaArrowCircleRight } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AjouterEleve from "./pages/AjouterEleve/AjouterEleve";
import "./style.scss";

const Enseignants = () => {
  const location = useLocation().pathname.split("/");
  return (
    <div className="elevesContainner">
      <div>
        <FaArrowCircleRight /> Enseignant page/
      </div>

      <div className="elevesContainer-blockEleves">
        <div>
          <Link
            to="/eleves"
            className={`navLink ${location[2] === "ajouter" ? "" : "active"}`}
          >
            Liste Enseignant
          </Link>
          <Link
            to="/eleves/ajouter"
            className={`navLink  ${location[2] === "ajouter" ? "active" : ""}`}
          >
            Ajouter un Enseignant
          </Link>S
        </div>

        <div className="elevesContainer-blockDetails">
          <Routes>
            <Route index element={<Enseignants />} />
            <Route path="/ajouter" element={<AjouterEleve />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Enseignants;
