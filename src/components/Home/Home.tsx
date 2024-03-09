import { FaArrowCircleRight } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import EtatClasseComponent from "./components/EtatClasse/EtatClasse";
import TotalStat from "./components/TotalStat/TotalStat";
import RangClasse from "./components/classement/RangClasse";
import "./style.scss";
import ClasseClassementMock from "./utils/ClassementMock";
import EtatClasseMock from "./utils/EtatClassesMock";
import MockTotal from "./utils/TotalStatMock";
import Example from "./components/chart/ChartStat";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div>
        <FaArrowCircleRight /> Home page/
      </div>
      <div className="HomeContainer-blockTotalStat">
        {MockTotal.map((el, idx) => {
          return (
            <TotalStat
              key={idx}
              icon={el.icon}
              text={el.text}
              nombre={el.nombre}
            />
          );
        })}
      </div>

      <div className="HomeContainer-graphe">
        <Example />
      </div>

      <div className="HomeContainer-classeClassement">
        <h2>Classement meilleures classes</h2>
        <div>
          <div className="headerTitleClassement">
            <span>Rang</span>
            <span>Classe</span>
            <span>Moyenne</span>
            <span>Evolution</span>
          </div>
          {ClasseClassementMock.map((el, idx) => {
            return (
              <RangClasse
                key={idx}
                icon={el.icon}
                route={el.route}
                text={el.text}
                moyenne={el.moyenne}
                evolution={
                  parseInt(el.moyenne) < 10 ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronUp />
                  )
                }
                style={parseInt(el.moyenne) < 10 ? "Down" : "Up"}
              />
            );
          })}
        </div>
      </div>

      <div className="HomeContainer-etatClasse">
        <h1>Etat des classes</h1>
        <div className="headerTitleEtablissement">
          <span>Classe</span>
          <span>Professeur</span>
          <span>Inscrit(s)</span>
          <span>places</span>
          <span>Action</span>
        </div>
        <div>
          {EtatClasseMock.map((el, idx) => {
            return (
              <EtatClasseComponent
                classe={el.classe}
                professeur={el.professeur}
                inscrits={el.inscrits}
                places={el.place}
                action={el.action}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
