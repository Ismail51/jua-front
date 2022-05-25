import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';


export default function Offres() {
  const [offer, setOffer]= useState([]);
useEffect(() => {
   axios.get("http://localhost:3002/offers").then(data =>{
     console.log(data); 
     setOffer(data.data);
   }) 
}, []);

  return (
    <div className="main-div">
        <Navbar/> 
        <div className="section-body" >
            <div className="section-left">
                <img src="./image/jean.jpg" alt="profile"/>
                <div className="div-left">
                    <h2>Jean Micheal</h2>
                    <h4>Address: 19 rue de la reunion</h4>
                    <p>Inscrit depuis: 2021</p>
                </div>
            </div>
            {/* <div className="separator"></div> */}
            <div className="section-right">
                <h1>Offres active</h1>
              <div className="div-right">
                  <h3>Jean micheal</h3>
                  <h4>Menage-3heures</h4>
                      <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                        Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                      <div className="btn">
                          <button>Voir plus</button>
                      </div>
              </div> 
              <div className="div-right">
                  <h3>Jean micheal</h3>
                  <h4>Menage-3heures</h4>
                      <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                        Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                      <div className="btn">
                          <button>Voir plus</button>
                      </div>
              </div>
              <div className="div-right">
                  <h3>Jean micheal</h3>
                  <h4>Menage-3heures</h4>
                      <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                        Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                      <div className="btn">
                          <button>Voir plus</button>
                      </div>
              </div>
              <div className="div-right">
                  <h3>Jean micheal</h3>
                  <h4>Menage-3heures</h4>
                      <p>“Je suis a la recherche d’une personne pouvant m’aider a bl Je suis a la recherche d’une personne pouvant m’aider a blaa
                        Je suis a la recherche d’une personne pouvant m’aider a ba”</p>
                      <div className="btn">
                          <button>Voir plus</button>
                      </div>
              </div> 
            </div>
        </div>
    </div>
  )
}
