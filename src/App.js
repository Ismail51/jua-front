import React, { useState } from "react"
import './App.css';
import './annonces.css';
import './Form.css';
import './Recherche.css';
import './History.css';
import './login.css';
import './components/Login';

import Recherche from "./components/Recherche";
import Offres from "./components/Annonces";
import Home from "./components/Home";
import Form from "./components/Form";
import History from "./components/History";
import VoirPlus from "./components/voirPlus";
import Login from "./components/Login";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";


export const AppContext = createContext()
export default function App() {
  const [log, setLog] = useState(false)
  const [user, setUser] = useState({})
  const logUser = (data) => {
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
          <Route path="/Offres" element={<Offres />}></Route>
          <Route path="/VoirPlus/:id" element={<VoirPlus />}></Route>
          <Route path="/Recherche" element={<Recherche />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/History" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
