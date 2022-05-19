import Profil from "./components/profil";
import ActiveOffres from "./components/activeOffres";
import Messagerie from "./components/messagerie";
import Navbar from "./components/navbar";
import RechercheBar from "./components/rechercheBar";
import ServicesRendu from "./components/servicesRendu";
import VoirPlus from "./components/voirPlus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Profil" element={<Profil />}></Route>
        <Route path="/ActivesOffres" element={<ActiveOffres />}></Route>
        <Route path="/Messagerie" element={<Messagerie />}></Route>
        <Route path="/Navbar" element={<Navbar />}></Route>
        <Route path="/RechercheBar" element={<RechercheBar />}></Route>
        <Route path="/ServicesRendu" element={<ServicesRendu />}></Route> */}
        <Route path="/VoirPlus" element={<VoirPlus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
