import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import classeMock from "../../Utils/ClasseMock";
import optionClasseMock from "../../Utils/OptionsClasseMock";
import RoutesVoirClasse from "./routes/RoutesVoirClasse";
import "./styles.scss";
import { listeClasse } from "./pages/ClasseTransition/ClasseTransition";

function VoirClasse() {
  const location = useLocation();
  const tableauRoute = location.pathname.split("/");
  return (
    <div className="VoirClasseContainer">
      <div className="VoirClasseContainer-blockChoix">
        <h3>Classes</h3>
        <div>
          {classeMock.map((el, idx) => {
            if (idx !== 0) {
              return (
                <NavLink
                  key={idx}
                  to={el.route}
                  className="VoirClasseContainer-linkClasse"
                >
                  {el.text}
                </NavLink>
              );
            } else {
              return null;
            }
          })}
        </div>
        <Routes>
          <Route
            path="/:classe/*"
            element={
              <>
                <h3>Options classe</h3>
                <div>
                  {optionClasseMock.map((el, idx) => {
                    if (idx !== 0) {
                      return (
                        <NavLink
                          to={el.route}
                          key={idx}
                          className="VoirClasseContainer-linkOptions"
                        >
                          {el.text}
                        </NavLink>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </>
            }
          />
        </Routes>
      </div>
      <div className="VoirClasseContainer-details">
        <div>
          <span>
            {listeClasse.includes(tableauRoute[2]) ? tableauRoute[2] : ""}
          </span>
          /<span>{listeClasse.includes(tableauRoute[2]) ? tableauRoute[3] : ""}</span>
        </div>
        <RoutesVoirClasse
          route={listeClasse.includes(tableauRoute[2]) ? tableauRoute[2] : ""}
          selectedClasse={listeClasse.includes(tableauRoute[2]) ? tableauRoute[2] : ""}
        />
      </div>
    </div>
  );
}
export default VoirClasse;
