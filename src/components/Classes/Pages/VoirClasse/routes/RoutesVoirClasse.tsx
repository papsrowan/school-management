import { Route, Routes } from "react-router-dom";
import {} from "../VoirClasse";
import BulletinsClasse from "../pages/BulletinsClasse/BulletinsClasse";
import ClasseTransition from "../pages/ClasseTransition/ClasseTransition";
import ElevesClasse from "../pages/ElevesClasse/ElevesClasse";
import MatieresClasse from "../pages/MatieresClasse/MatieresClasse";
import ProgrammeClasse from "../pages/ProgrammeClasse/ProgrammeClasse";
import StatistiqueClasse from "../pages/StatistiqueClasse/StatistiquesClasse";

const RoutesVoirClasse = ({
  route,
  selectedClasse,
}: {
  route: string;
  selectedClasse: string;
}) => {
  return (
    <Routes>
      <Route path={`/:nameClasse`} element={<ClasseTransition />} />
      <Route
        path={route + "/eleves"}
        element={<ElevesClasse classe={selectedClasse} />}
      />
      <Route
        path={route + "/bulletins"}
        element={<BulletinsClasse classe={selectedClasse} />}
      />
      <Route
        path={route + "/programme"}
        element={<ProgrammeClasse classe={selectedClasse} />}
      />
      <Route
        path={route + "/matieres"}
        element={<MatieresClasse classe={selectedClasse} />}
      />
      <Route
        path={route + "/stastiques"}
        element={<StatistiqueClasse classe={selectedClasse} />}
      />
      <Route
        path={"*"}
        element={
          // <>Veillez choisir une classe qui existe et les actions appropriées</>
          <ClasseTransition />
        }
      />
    </Routes>
  );
};

export default RoutesVoirClasse;
