import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function Recherche() {

    const [offers, setOffers] = useState([])
    const [ok, setOk] = useState(false)
    useEffect(() => {
        getAlloffers()
    }, [])

    const getAlloffers = () => {
        axios.get('https://jua-back.herokuapp.com/offers').then(data => {
            setOffers(data.data)
            setOk(true)
        })
    }

    const search = (e) => {
        if (e.target.value == "tout") {
            getAlloffers()
        }
        else {
            console.log("sfvsd", e.target.value);
            axios.get(`https://jua-back.herokuapp.com/offers/type/${e.target.value}`).then(data => {
                setOffers(data.data)
            })
        }
    }

  return (
    <div className="main-div">
            <Navbar/>
                <div className="search">
                    <div className="search-div">
                        <label htmlFor="lists">Liste des services</label>
                            <select onChange={search} id="lists">
                            <option  disabled selected value>Recherche</option>
                            <option value="tout">Tout</option>
                            <option value="menage">Service à domicile</option>
                            <option value="demenagement">Déménagement</option>
                            <option value="informatique">Informatique</option>
                            <option value="bricolage">Bricolage</option>
                            <option value="transport">Transport</option>
                            <option value="course">Course</option>
                            </select>
                    </div>
                    {
                    ok ?
                        <div>
                            <div className="container">
                            <div className="div-option">
                                <h3>{offers.length} {offers.length > 1 ? "Offres" : "Offre"} </h3>
                            </div>

                                {
                                    offers.map(offer => {
                                        return (
                                            <div className="card-body">
                                                <img src={"/image/"+offer.created_by.profile_picture} alt="profile" />
                                                <div className="card-info">
                                                    <h3>{offer.created_by.firstname} {offer.created_by.lastname}</h3>
                                                    <h4>{offer.offerType} - {offer.duration} heures</h4>
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
                        : null
                }
            </div>
        </div>

    )
}
