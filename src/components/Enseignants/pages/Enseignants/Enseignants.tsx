import { FaPeopleRoof } from "react-icons/fa6";
import DetailsEnseignants from "../../components/DetailsEnseignants/DetailsEnseignants";
import FiltreEnseignants from "../../components/FiltreEnseignants/FiltreEnseignants";
import { mockDetailsEnseignants } from "../../utils/DetailsEnseignants/mockDetailsEnseignants";
import "./styles.scss";

const Enseignants = () => {
  return (
    <div className="elevesContainer">
      <div>
        
        <FiltreEnseignants
          filter={"19"}
          icon={<FaPeopleRoof />}
          tilte="HOMME"
        />
        <FiltreEnseignants
          filter={"19"}
          icon={<FaPeopleRoof />}
          tilte="FEMME"
        />
      </div>

      <div>
        <h3>List des Enseignants</h3>
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
            Enseignants
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
            {mockDetailsEnseignants.map((el, idx) => (
              <DetailsEnseignants
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

export default Enseignants;
