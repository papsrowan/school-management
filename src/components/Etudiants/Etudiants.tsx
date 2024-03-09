import { FaArrowCircleRight } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Eleves from "./pages/Eleves/Eleves";
import "./style.scss";
import AjouterEleve from "./pages/AjouterEleve/AjouterEleve";

const Etudiants = () => {
  const location = useLocation().pathname.split("/");
  return (
    <div className="elevesContainner">
      <div>
        <FaArrowCircleRight /> Eleves page/
      </div>

      <div className="elevesContainer-blockEleves">
        <div>
          <Link
            to="/eleves"
            className={`navLink ${location[2] === "ajouter" ? "" : "active"}`}
          >
            Liste Elèves
          </Link>
          <Link
            to="/eleves/ajouter"
            className={`navLink  ${location[2] === "ajouter" ? "active" : ""}`}
          >
            Ajouter un elève
          </Link>
        </div>

        <div className="elevesContainer-blockDetails">
          <Routes>
            <Route index element={<Eleves/>} />
            <Route path="/ajouter" element={<AjouterEleve/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Etudiants;
