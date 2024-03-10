import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/App.css";
import Bulletins from "./components/Bulletins/Bulletins";
import Classes from "./components/Classes/Classes";
import Enseigne from "./components/Enseignants/Enseigne";
import Etudiants from "./components/Etudiants/Etudiants";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Details from "./components/Details/Details";

export function App() {
  return (
    <Router>
      <div className="global-container">
        <NavBar />
        <Header />
        <div className="blockPages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes/*" element={<Classes />} />
            <Route path="/eleves/*" element={<Etudiants />} />
            <Route path="/bulletins" element={<Bulletins />} />
            <Route path="/enseignants" element={<Enseigne />} />
            <Route path="/profil/*" element={<Profile />} />
            <Route path="/details/:id/*" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
