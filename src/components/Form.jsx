import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useContext} from "react"
import {AppContext} from "../App"
// import "../Form.css";


export default function Form() {
  const context = useContext(AppContext)

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
        axios.post("http://localhost:3002/offers", newOffer).then(info => {
          console.log(info)
        }) 
        console.log('Faire quelque chose au submit des', data)
      };
    
  return (
    <div className="main-div">
        <Navbar/>
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="service">Service</label>
                <select {...register('service', {required: 'You need to enter the description' })} id="service" name="service">
                <option  disabled value> -- select an option -- </option>
                <option value="menage">Menage</option>
                <option value="informatique">Informatique</option>
                <option value="demanage">Demanagement</option>
                </select>
                <label htmlFor="duration">Durée en heure</label>
                <br></br>
                <input {...register('duration', {required: 'Vous devez entrer une durée' })} max="24" min="1" type="number" id="duration" name="duration" />
                <br></br>
                <label htmlFor="message">Message</label>
                
                <textarea {...register('description', {required: 'You need to enter the description' })} id="description"  name="description" placeholder="Entrez une description pour l'offre" style={{height:"300px"}}></textarea>
                <p> {errors.description && errors.description.message} </p>
                <input type="submit" value="Submit"/>

            </form>
         </div>
    </div>
  )
}
