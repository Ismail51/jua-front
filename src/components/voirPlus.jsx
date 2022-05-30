import React, { useContext, useEffect, useState } from "react";
import NavBar from './Navbar'
import '../voirPlus.css'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";


function VoirPlus() {
  let { id } = useParams();
  const [offer, setOffer] = useState({})
  const [ok, setOk] = useState(false)
  const context = useContext(AppContext)
  useEffect(() => {
    axios.get(`http://localhost:3002/offers/${id}`).then(data => {
      setOffer(data.data)
      setOk(true)
      console.log(data)
    })
  }, [])

  const acceptOffer = (e)=>{
    e.preventDefault()
    console.log("ok", context.user._id)
    axios.put(`http://localhost:3002/offers/${id}`, {accepted_by:context.user._id}).then(ok=>{
      console.log(ok)
    })
  }

  return (
    <div className="main">
      <NavBar></NavBar>
      {
        ok ?
          <div className="offer">
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
                <h3>Description</h3>
              <div className="description-offer">
                <p>{offer.description}</p>
              </div>
              </div>
              <div className="offer-btn">
                <button><NavLink to="/recherche">Retour au offres</NavLink></button>
                <button onClick={acceptOffer}>Accepter l' offre</button>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default VoirPlus