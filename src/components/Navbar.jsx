import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
 
function Navbar() {
  return (
    <>
        <nav className="navbar">
          <div className="top">
          <h1><a href="#home">Juste une aide</a></h1>
          </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/recherche">Recherche</NavLink></li>
                <li><NavLink to="/Messagerie">Message</NavLink></li>
                <li><NavLink to="/history">History</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
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