import { ReactNode } from "react";
import './style.scss';
import { Link } from "react-router-dom";

type TEleve = {
  photo: ReactNode;
  nom: string;
  email: string;
  classe: string;
  section: String;
  redouble: string;
  adresse: string;
  genre: string;
};
const DetailsEnseignants = (eleveDetails: TEleve) => {
  return (
    <Link to={``} className="eleveLink">
    <tr>
      <td className="eleveLink-photo">{eleveDetails.photo}</td>
      <td>{eleveDetails.nom}</td>
      <td>{eleveDetails.email}</td>
      <td>{eleveDetails.classe}</td>
      <td>{eleveDetails.redouble}</td>
      <td>{eleveDetails.adresse}</td>
      <td>{eleveDetails.genre}</td>
      <td>
        <select name="option">
            <option value="Action" key="">Action</option>
            <option value="Action" key="">voir</option>
            <option value="Action" key="">Supprimer</option>
            <option value="Action" key="">Modifier</option>
        </select>
      </td>
    </tr>
    </Link>
  );
};

export default DetailsEnseignants;
