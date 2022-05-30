import Navbar from "./Navbar"
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../App';
import { NavLink } from 'react-router-dom';

function History() {
  const context = useContext(AppContext)
  const [offers, setOffers] = useState([]);
  const [ok, setOk] = useState(false)

  useEffect(() => {
    console.log(`http://localhost:3002/offers/history/${context.user._id}`)
    axios.get(`http://localhost:3002/offers/history/${context.user._id}`).then(data => {
      console.log(data);
      setOffers(data.data);
      setOk(true)
    })
  }, []);
  return (
    <div className="main-div">
      <Navbar></Navbar>
      <div className="section-body" >
        <div className="section-right">
          <h1>Historique des offres acceptées</h1>
          {
            ok ?
              offers.map(offer => {
                return (
                  <div className="card-body accepted">
                    <img src="./image/aide.jpeg" alt="profile" />
                    <div className="card-left">
                      <h3>{offer.created_by.firstname} {offer.created_by.lastname}</h3>
                      <h4>{offer.offerType}-{offer.duration} heures</h4>
                      <p>“{offer.description}”</p>
                      <div className="btn">
                        <button><NavLink to={`/voirPlus/${offer._id}`}>Voir plus</NavLink></button>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              null
          }
        </div>
      </div>
    </div>
  )
}


export default History