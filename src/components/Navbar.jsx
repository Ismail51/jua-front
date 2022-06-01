import React from 'react'
import '../Recherche.css';
import { NavLink, Navigate } from 'react-router-dom';
import { useContext } from "react"
import { AppContext } from "../App"
function Navbar() {
  const context = useContext(AppContext)
  console.log("okkkkkkkkk", context.log)
  return (
    <>
    {context.log?null : <Navigate to="/login"/>}
      <nav className="navbar">
        <div className="top">
          <h1>Juste une aide</h1>
        </div>
        <ul>
          <li className="hover">
            <NavLink 
            to="/recherche"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >Recherche</NavLink>
          </li>
          <li className="hover"><NavLink to="/Offres">Mes annonces</NavLink></li>
          <li className="hover"><NavLink to="/history">Mon Historique</NavLink></li>
          <li className="hover"><NavLink to="/form">Nouveau besoin</NavLink></li>
        </ul>
        <div className="profile">
            <div>
            <img src={"/image/"+context.user.profile_picture} alt="profile" />
            </div>
            <div id="profile">
              <h2>{context.user.firstname} {context.user.lastname}</h2>
              <p>Points: {context.user.points}</p>
            </div>
          </div>
     
      </nav>
    </>
  )
}
export default Navbar;
