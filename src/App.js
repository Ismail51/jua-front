import React from "react"
import './App.css';
import Recherche from "./components/Recherche";
import Offres from "./components/Offres";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
      {/* <Recherche/> */}
      <Offres/>
    </div>
  );
}

export default App;
