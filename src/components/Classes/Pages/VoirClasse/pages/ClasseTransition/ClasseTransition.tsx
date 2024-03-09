import "./style.scss";
import { FaPeopleRoof } from "react-icons/fa6";
import { useParams } from "react-router-dom";

export const listeClasse = [
  "6emeA",
  "6emeB",
  "5emeA",
  "5emeB",
  "4emeA",
  "4emeB",
  "3emeEsp",
  "3emeall",
  "2ndA",
  "2ndC",
  "1ereA",
  "1ereC",
  "1ereD",
  "TleC",
  "TleA4Esp",
  "TleA4All",
  "TleD",
];
const ClasseTransition = () => {
  const { nameClasse } = useParams();
  return (
    <div className="container-classeTransition">
      {
        // @ts-ignore
        listeClasse.includes(`${nameClasse}`) ? (
          <>
            <FaPeopleRoof />
            <h1>{nameClasse}</h1>
          </>
        ) : (
          <>
            <FaPeopleRoof />
            <h1>{nameClasse}</h1>
          </>
        )
      }
    </div>
  );
};

export default ClasseTransition;
