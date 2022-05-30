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
        axios.get('http://localhost:3002/offers').then(data => {
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
            axios.get(`http://localhost:3002/offers/type/${e.target.value}`).then(data => {
                setOffers(data.data)
            })
        }
    }

  return (
    <div className="main-div">
            <Navbar/>
                <div className="search">
                    <div className="search-div">
                        <label htmlFor="lists">Liste des taches</label>
                            <select onChange={search} id="lists">
                            <option  disabled selected value>Rechercher</option>
                            <option value="tout">Tout</option>
                            <option value="menage">Ménage</option>
                            <option value="demenagement">Déménagement</option>
                            <option value="informatique">Informatique</option>
                            <option value="accompagne">Accompagnement</option>
                            <option value="bricolage">Bricolage</option>
                            <option value="transport">Transport</option>
                            <option value="course">Course</option>
                            </select>
                    </div>
            {
                ok?
                    <div>       
                        <div className="div-option">
                            <h3>{offers.length} {offers.length>1?"Offres":"Offre"} </h3>
                        </div>
                        : null
                }
            </div>

        </div>

    )
}
