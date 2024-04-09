import { ReactNode, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import reduce from "./DetalsReducer";

type TEleve = {
  photo: ReactNode;
  nom: string;
  email: string;
  classe: string;
  section: String;
  redouble: string;
  adresse: string;
  genre: string;
  id: number;
};
export type Treduce = {
  isDelete: boolean;
};
const DetailsEnseignants = (eleveDetails: TEleve) => {
  let initializer: Treduce = {
    isDelete: false,
  };
  const [stateOption, dispatchOption] = useReducer(reduce, initializer);
  const navigation = useNavigate();
  const showDetails = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === "Voir") {
      navigation("/details/" + eleveDetails.id + "");
    } else if (e.target.value === "Supprimer") {
      dispatchOption({
        type: "isDelete",
        payload: true,
      });
    }
  };
  return (
    <div className="eleveLink">
      {stateOption.isDelete ? (
        <div className="popDelete" onClick={(e)=>{
          console.log(e.currentTarget, e.target)
          if (e.currentTarget === e.target) {
            dispatchOption({
              type: "isDelete",
              payload: false
            })
          }
        }}>
          <div >
            <span>Voulez-vous vraiment supprimer cet Enseignant?</span>
            <div>
              <button style={{borderRadius:8, border:'none'}}>Cancel</button><button style={{backgroundColor:'red', color:"white", border:'none',borderRadius:8}}>Oui</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <tr>
        <td className="eleveLink-photo">{eleveDetails.photo}</td>
        <td>{eleveDetails.nom}</td>
        <td>{eleveDetails.email}</td>
        <td>{eleveDetails.classe}</td>
        <td>{eleveDetails.redouble}</td>
        <td>{eleveDetails.adresse}</td>
        <td>{eleveDetails.genre}</td>
        <td>
          <select
            name="option"
            onChange={(e) => showDetails(eleveDetails.id, e)}
          >
            <option value="Action" key="">
              Action
            </option>
            <option value="Voir" key="">
              Voir
            </option>
            <option value="Supprimer" key="">
              Supprimer
            </option>
            <option value="Modifier" key="">
              Modifier
            </option>
          </select>
        </td>
      </tr>
    </div>
  );
};
export default DetailsEnseignants;
