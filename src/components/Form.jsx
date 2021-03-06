import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useContext, useState} from "react"
import {AppContext} from "../App"
import {Navigate, NavLink} from 'react-router-dom'
// import "../Form.css";
export default function Form() {
  const context = useContext(AppContext)
  const [created, setCreated] = useState(false)
  const [idOffer, setInfo] = useState({})
    const { register, handleSubmit, formState} = useForm();
    const { errors } = formState;
    const onSubmit = (data) => {
        const newOffer = {
          created_by: context.user._id,
          description: data.description,
          offerType : data.service,
          duration:data.duration,
          is_active : true
        }
        axios.post("https://jua-back.herokuapp.com/offers", newOffer).then(info => {
          console.log(info.data._id)
          if(info.status ===200){
            setCreated(true)
            setInfo(info.data._id)
          }
        })
      };
  return (
    <div className="main-div">
        <Navbar/>
        <div className="container-form">
          <h2 className="top-title">Publier un nouveau besoin</h2>
          {created?<Navigate to={`/VoirPlus/${idOffer}`}/>:null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="service">Service</label>
                <select {...register('service', {required: 'You need to enter the description' })} id="service" name="service">
                <option  disabled value> -- Selectionner  -- </option>
                            <option value="menage">Service à domicile</option>
                            <option value="demenagement">Déménagement</option>
                            <option value="informatique">Informatique</option>
                            <option value="bricolage">Bricolage</option>
                            <option value="transport">Transport</option>
                            <option value="course">Course</option>
                </select>
                <label htmlFor="duration">Durée en heure</label>
                <br></br>
                <input {...register('duration', {required: 'Vous devez entrer une durée' })} max="24" min="1" type="number" id="duration" name="duration" />
                <br></br>
                <label htmlFor="message">Message</label>
                <textarea {...register('description', {required: 'You need to enter the description' })} id="description"  name="description" placeholder="Entrez une description pour l'offre" style={{height:"300px"}}></textarea>
                <p> {errors.description && errors.description.message} </p>
                <input type="submit" value="Submit"/>
          <p> {errors.description && errors.description.message} </p>
          <NavLink to={"/offres"}></NavLink>
        </form>
      </div>
    </div>
  )
}