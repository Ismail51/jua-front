import axios from "axios"
import {useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function(){
    const [registered, setRegistered] = useState(false)
    const submitHandler = (e)=>{
        e.preventDefault()
        const data = e.target
        if(data[3].value == data[4].value){
            const newUser = {
                mail:data[0].value,
                firstname : data[1].value,
                lastname : data[2].value,
                age : data[9].value,
                phone : data[5].value,
                city : data[6].value,
                zipcode : data[7].value,
                adress :  data[8].value,
                points : 0,
                password:data[3].value,
            }
            axios.post('http://localhost:3002/register/',
            newUser,    
            ).then(result=>{
                console.log(result)
                setRegistered(true)
            })
        }



    }
    return(
        <>
          {registered ? <Navigate to="/login" /> : null}

            <form onSubmit={submitHandler}>
            <input type="text" name="email" placeholder="Email"></input>
                <input  type="text" name="firstname" placeholder="Prénom"></input>
                <input  type="text" name="lastname" placeholder="Nom"></input>
                <input  type="password" name="pass1" placeholder="Mot de passe"></input>
                <input  type="password" name="pass2" placeholder="Confirmez le mot de passe"></input>
                <input type="number" name="phone" placeholder="Telephone"></input>
                <input  type="text" name="city" placeholder="Ville"></input>
                <input  type="number" name="zipcode" placeholder="Code postal"></input>
                <input  type="text" name="adress" placeholder="Adresse"></input>
                <input  type="number" name="age" placeholder="Age"></input>
                <input type="submit"></input>
            </form>
        </>

    )
}