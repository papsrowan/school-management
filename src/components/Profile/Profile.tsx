import { Route, Routes } from "react-router-dom";
import Parametre from "../Parametre/Parametre";

function Profile() {
  return (
    <Routes>
        {/* le / commence a http://localhost:PORT/profil */}
      <Route path="/" element={<div>Hello profil</div>} />
      <Route path="/parametre" element={<Parametre />} />
    </Routes>
  );
}

export default Profile;
