import React from "react"
import './App.css';
import './offres.css';
import './Form.css';
import Recherche from "./components/Recherche";
import Offres from "./components/Offres";
import Profil from "./components/profil";
import Home from "./components/Home";
import Form from "./components/Form";
import VoirPlus from "./components/voirPlus";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Recherche" element={<Recherche />}></Route>
        <Route path="/Profil" element={<Profil />}></Route>
        <Route path="/Offres" element={<Offres />}></Route>
        <Route path="/VoirPlus" element={<VoirPlus />}></Route>
        <Route path="/Form" element={<Form />}></Route> 
      </Routes>
    </BrowserRouter>

  );
}
