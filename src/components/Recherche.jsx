import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function Recherche() {
  return (
    <div className="main-div">
            <Navbar/>
                <div className="search">
                    <div className="search-div">
                        <label htmlFor="lists">Liste des taches</label>
                            <select id="lists">
                            <option  disabled selected value> -- select an option -- </option>
                            <option value="menage">Menage</option>
                            <option value="demanage">Demenage</option>
                            <option value="informatiqe">Informatique</option>
                            <option value="accompagne">Accompagne</option>
                            </select>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                    <div className="div-option">
                      <h3>27 result pour menage</h3>
                    </div>
                    
                    <div className="container">
                        
                        <div className="card-body">
                            <img src="./image/jean.jpg" alt="profile"/>
                            <div>
                                <h3>jean micheal</h3>
                                <h4>Menage-3heures</h4>
                                <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                                Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                                <div className="btn">
                                    <button><NavLink to="/VoirPlus">Voir plus</NavLink></button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src="./image/jean.jpg" alt="profile"/>
                            <div>
                                <h3>jean micheal</h3>
                                <h4>Menage-3heures</h4>
                                <p>“Je suis a la recherche d’une personne pouvant m’aider a bla Je suis a la recherche d’une personne pouvant m’aider a bla
                                Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                                <div className="btn">
                                    <button><NavLink to="/VoirPlus">Voir plus</NavLink></button>
                                </div>
                            </div>
                        </div> 

                    </div>








                </div>
       
    </div>
    
  )
}
