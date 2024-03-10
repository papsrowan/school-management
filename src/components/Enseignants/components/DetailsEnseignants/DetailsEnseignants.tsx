import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';

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
const DetailsEnseignants = (eleveDetails: TEleve) => {
  const navigation = useNavigate();
  const showDetails = (index: number, e:React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Voir') {
      navigation('/details/'+eleveDetails.id+'');
      
    }
  }
  return (
    <div className="eleveLink" >
    <tr>
      <td className="eleveLink-photo">{eleveDetails.photo}</td>
      <td>{eleveDetails.nom}</td>
      <td>{eleveDetails.email}</td>
      <td>{eleveDetails.classe}</td>
      <td>{eleveDetails.redouble}</td>
      <td>{eleveDetails.adresse}</td>
      <td>{eleveDetails.genre}</td>
      <td>
        <select name="option" onChange={(e) => showDetails(eleveDetails.id,e)}>
            <option value="Action" key="">Action</option>
            <option value="Voir" key="" >Voir</option>
            <option value="Supprimer" key="">Supprimer</option>
            <option value="Modifier" key="">Modifier</option>
        </select>
      </td>
    </tr>
    </div>
  );
};

export default DetailsEnseignants;
