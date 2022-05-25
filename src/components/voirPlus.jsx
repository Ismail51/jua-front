import React, { useEffect, useState } from "react";
import NavBar from './Navbar'
import '../voirPlus.css'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { NavLink } from "react-router-dom";


function VoirPlus() {
  let { id } = useParams();
  const [offer, setOffer] = useState({})
  const [ok, setOk] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:3002/offers/${id}`).then(data => {
      setOffer(data.data)
      setOk(true)
      console.log(data)
    })
  }, [])

  return (
    <div className="main">
      <NavBar></NavBar>
      {
        ok ?
          <div>
            <div className="offer-top">
              <img src="./image/jean.jpg" alt="" />
              <div className="right-info">
                <p>Prénom : {offer.created_by.firstname}</p>
                <p>Nom : {offer.created_by.lastname}</p>
                <p>Ville : {offer.created_by.city}</p>
                <p>Date : {offer.created_by.registered_at}</p>
              </div>
            </div>
            <div className="offer-bottom">
              <div className="offer-description">
                <h3>description</h3>
                <p>{offer.description}</p>
              </div>
              <div className="offer-btn">
                <button><NavLink to="/recherche">return</NavLink></button>
                <button>accept</button>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default VoirPlus