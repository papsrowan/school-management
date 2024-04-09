import { NavLink, Route, Routes, useParams } from "react-router-dom";
import DetailsChangePasseWord from "./components/DetailsChangePasseWord/DetailsChangePasseWord";
import DetailsHome from "./components/DetailsHome.tsx/DetailsHome";
import DetailsInformation from "./components/DetailsInformation/DetailsInformation";
import DetailsSetting from "./components/DetailsSetting/DetailsSetting";
import "./style.scss";

const Details = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="Details">
      <h3>Enseignant Profil {id}</h3>
      <div className="Details-container">
      <div>
        <div className="Details-container-photo">
          <div>
            <img src="/p2.png" alt="profil" />
          </div>
          <span>Teacher One</span>
          <span>Teacher</span>
        </div>
        <div className="Details-container-info">
          <span>Email :</span>
          <span>papsrowan@gmail.com</span>
        </div>
        <div className="Details-container-info">
          <span>Contact :</span>
          <span>(+237) 657 841 880</span>
        </div>
        <div className="Details-container-info">
        <span>DOD :</span>
        <span>7757698798GHG</span>
        </div>
        <button>Suspend</button>
      </div>
      <div>
        <div className="Details-container-header">
          <NavLink to={`home`}className="link">Home</NavLink>
          <NavLink to={`information`}className="link">Information</NavLink>
          <NavLink to={`passeword`}className="link">Passeword</NavLink>
          <NavLink to={`setting`}className="link">Setting</NavLink>
        </div>
        <div>
          <Routes>
          <Route index element={<DetailsHome />}/>
          <Route path="information" element={<DetailsInformation />}/>
          <Route path="passeword" element={<DetailsChangePasseWord />}/>
          <Route path="setting" element={<DetailsSetting />}/>

          </Routes>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
