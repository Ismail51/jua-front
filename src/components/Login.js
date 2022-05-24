import axios from "axios"
import {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function  (){
    const [loggedIn, setLoggedIn] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault()
        const data = e.target
            const log = {
                mail:data[0].value,
                password:data[1].value,
            }
            axios.post('http://localhost:3002/register/auth/login',
            log,    
            ).then(result=>{
                console.log(result)
                setLoggedIn(true)
            })
        }

    return(
        <>
            {loggedIn ? <Navigate to="/" /> : null}
            <form onSubmit={submitHandler}>
                <input type="text" name="email" placeholder="Email"></input>
                <input  type="password" name="pass2" placeholder="Confirmez le mot de passe"></input>
                <input type="submit"></input>
            </form>
        </>

    )
}