import React from "react";
import FiltreEleves from "../../components/FiltreEleves/FiltreEleves";
import { FaPeopleRoof } from "react-icons/fa6";
import "./style.scss";
import { listeClasse } from "../../../Classes/Pages/VoirClasse/pages/ClasseTransition/ClasseTransition";
import { tableSession } from "../../utils/filtre/mockSession";
import DetailsEleve from "../../components/DetailsEleve/DetailsEleve";
import { mockDetailsEleve } from "../../utils/detailsEleve/mockDetailsEleve";

const Eleves = () => {
  return (
    <div className="elevesContainer">
      <div>
        <FiltreEleves
          filter={tableSession}
          icon={<FaPeopleRoof />}
          tilte="Running Session"
        />
        <FiltreEleves
          filter={listeClasse}
          icon={<FaPeopleRoof />}
          tilte="Select Class"
        />
        <FiltreEleves
          filter={tableSession}
          icon={<FaPeopleRoof />}
          tilte="Select Section"
        />
        <FiltreEleves
          filter={"19"}
          icon={<FaPeopleRoof />}
          tilte="TOTAL STUDENT"
        />
      </div>

      <div>
        <h3>List of student</h3>
        <div className="elevesContainer-nombreEleveContainer">
          <div>
            Voir{" "}
            <select>
              {" "}
              <option value="All" key="1">
                All
              </option>
              <option value="10" key="1">
                10
              </option>
              <option value="20" key="1">
                20
              </option>
              <option value="30" key="1">
                30
              </option>
            </select>{" "}
            Eleves
          </div>
          <div>
            <label>Recherche:</label> <input type="text" name="seach" />
          </div>
        </div>
        <table>
          <thead>
          </thead>
          <tbody>
          <tr>
              <td>Photo</td>
              <td>Nom</td>
              <td>Email</td>
              <td>Classe</td>
              <td>Annee</td>
              <td>Adresse</td>
              <td>Genre</td>
              <td>Option</td>
            </tr>
            <div className="elevesContainer-containerListe">
            {mockDetailsEleve.map((el, idx) => (
              <DetailsEleve
                key={idx}
                photo={el.photo}
                nom={el.nom}
                email={el.email}
                classe={el.classe}
                section={el.section}
                redouble={el.redouble}
                genre={el.genre}
                adresse={el.adresse}
              />
            ))}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eleves;
