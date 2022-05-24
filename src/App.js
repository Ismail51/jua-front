import React, { useState } from "react"
import './App.css';
import './offres.css';
import './Form.css';
import './Recherche.css';
import Recherche from "./components/Recherche";
import Offres from "./components/Offres";
import Profil from "./components/profil";
import Home from "./components/Home";
import Form from "./components/Form";
import Register from "./components/register";
import VoirPlus from "./components/voirPlus";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";


export const AppContext = createContext()
export default function App() {
  const [log, setLog] = useState(false)
  const [user, setUser] = useState({})
  const logUser = (data)=>{
    setLog(true)
    setUser(data)
  }
  const sendToContext = {
    logUser,
    log,
    user,
  }
  return (
    <AppContext.Provider value={sendToContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Recherche" element={<Recherche />}></Route>
          <Route path="/Profil" element={<Profil />}></Route>
          <Route path="/Offres" element={<Offres />}></Route>
          {/* <Route path="/ServicesRendu" element={<ServicesRendu />}></Route> */}
          {/* <Route path="/Contact" element={<Contact />}></Route> */}
          <Route path="/VoirPlus/:id" element={<VoirPlus />}></Route>
          <Route path="/Recherche" element={<Recherche />}></Route>
          <Route path="/Form" element={<Form />}></Route> 
          <Route path="/Register" element={<Register />}></Route> 
          <Route path="/Login" element={<Login />}></Route> 
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}
