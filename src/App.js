import React from "react"
import './App.css';
import Recherche from "./components/Recherche";
import Offres from "./components/Offres";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Profil from "./components/profil";
import ActiveOffres from "./components/activeOffres";
import Messagerie from "./components/messagerie";

import ServicesRendu from "./components/servicesRendu";
import VoirPlus from "./components/voirPlus";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Profil" element={<Profil />}></Route>
        <Route path="/ActivesOffres" element={<ActiveOffres />}></Route>
        <Route path="/Messagerie" element={<Messagerie />}></Route>
        <Route path="/ServicesRendu" element={<ServicesRendu />}></Route> 
      
        <Route path="/VoirPlus" element={<VoirPlus />}></Route>
        <Route path="/Recherche" element={<Recherche />}></Route>
      </Routes>
    </BrowserRouter>

  );
}
