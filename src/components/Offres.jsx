import React from 'react'
import Navbar from './Navbar'

export default function Offres() {
  return (
    <div className="main-div">
        <Navbar/> 
        <div className="section-body" >
            <div className="section-left">
                <img src="./image/jean.jpg" alt="profile"/>
                <div className="div-left">
                    <h3>Jean Micheal</h3>
                    <h4>Address: 19 rue de la reunion</h4>
                    <p>Inscrit depuis: 2021</p>
                </div>
            </div>
            <div className="separator"></div>
            <div className="section-right">
                <h2>Offres active</h2>
                <div className="div-right">
                <h3>jean micheal</h3>
                <h4>Menage-3heures</h4>
                    <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                      Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                </div>
            </div>
        </div>
    </div>
  )
}
