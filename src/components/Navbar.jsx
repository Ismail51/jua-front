import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
 
function Navbar() {
  return (
    <>
        <nav className="navbar">
          <div className="top">
          <h1>Juste une aide</h1>
          </div>
            <ul>
                <li className="hover"><NavLink to="/recherche">Recherche</NavLink></li>
                <li className="hover"><NavLink to="/offres">Offres</NavLink></li>
                <li className="hover"><NavLink to="/history">History</NavLink></li>
                <li className="hover"><NavLink to="/form">Form</NavLink></li>
            </ul>
          <div className="profile">
              <div>
                <img src="./image/jean.jpg" alt="profile"/>
              </div>
              <div id="profile">
                <h2>Jean Paluche</h2>
                <p>Points: 200</p>
              </div>
          </div>
         </nav>
    </>
  )
}
export default Navbar;