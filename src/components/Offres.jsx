import React, { useEffect, useState, useContext } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { AppContext } from '../App';
import { NavLink } from 'react-router-dom';

export default function Offres() {
  const context = useContext(AppContext)
  const [offers, setOffers]= useState([]);
  const [ok, setOk] = useState(false)

useEffect(() => {
  console.log(`http://localhost:3002/offers/user/${context.user._id}`)
   axios.get(`http://localhost:3002/offers/user/${context.user._id}`).then(data =>{
     console.log(data); 
     setOffers(data.data);
     setOk(true)
   }) 
}, []);

  return (
    <div className="main-div">
        <Navbar/> 
        <div className="section-body" >
            <div className="section-left">
                <img src="./image/jean.jpg" alt="profile"/>
                <div className="div-left">
                    <h2>{context.user.firstname} {context.user.lastname}</h2>
                    <h4>Adresse: {context.user.adress} {context.user.city} {context.user.zipcode} </h4>
                    <p>Inscrit depuis: {context.user.registered_at} </p>
                </div>
            </div>
            <div className="separator"></div>
            <div className="section-right">
                <h1>Offres active</h1>
                {
                  ok?
                        offers.map(offer=>{
                            return(
                                <div className="card-body">
                                    <img src={"/image/"+offer.created_by.profile_picture} alt="profile" />
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
                        :
                        null
                    }
            </div>
        </div>
    </div>
  )
}
