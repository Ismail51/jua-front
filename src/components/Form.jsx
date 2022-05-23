import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Form() {
  
    const { register, handleSubmit, formState} = useForm();
    const { errors } = formState;
    const onSubmit = (data) => {
        const newOffer = {
          created_by: "628b8fc1ef7f6357ebbd4198",
          description: data.description,
          offerType : data.service,
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

                <label htmlFor="message">Message</label>
                
                <textarea {...register('description', {required: 'You need to enter the description' })} id="description"  name="description" placeholder="ecrite ici.." style={{height:"300px"}}></textarea>
                <p> {errors.description && errors.description.message} </p>
                <input type="submit" value="Submit"/>

            </form>
         </div>
    </div>
  )
}
