import React from "react"
import './Recherche.css';
import Recherche from "./components/Recherche";
import Offres from "./components/Offres";
import Contact from "./components/Contact";
import Profil from "./components/profil";
import Home from "./components/Home";
import ServicesRendu from "./components/servicesRendu";
import VoirPlus from "./components/voirPlus";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profil" element={<Profil />}></Route>
        <Route path="/Offres" element={<Offres />}></Route>
        <Route path="/ServicesRendu" element={<ServicesRendu />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/VoirPlus" element={<VoirPlus />}></Route>
        <Route path="/Recherche" element={<Recherche />}></Route>
      </Routes>
    </BrowserRouter>

  );
}
