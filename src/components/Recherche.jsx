import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function Recherche() {

    const [offers, setOffers] = useState([])
    const [ok, setOk] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:3002/offers').then(data=>{
            setOffers(data.data)
            setOk(true)
        })
    }, [])
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
                    </div>
            {
                ok?
                    <div>       
                        <div className="div-option">
                            <h3>{offers.length} {offers.length>1?"Offres":"Offre"} </h3>
                        </div>
                        <div className="container">
                        
                    {
                        offers.map(offer=>{
                            return(
                                <div className="card-body">
                                <img src="./image/jean.jpg" alt="profile"/>
                                <div>
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
                    }
                        </div>
                    </div>
                :null
            }
        </div>

    </div>
    
  )
}
