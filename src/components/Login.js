import axios from "axios"
import {useContext, useState} from 'react'
import {Navigate} from 'react-router-dom'
import {AppContext} from '../App'

export default function  (){
    const context = useContext(AppContext)
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
                context.logUser(result.data)
            })
        }

    return(
        <>
            {context.log ? <Navigate to="/" /> : null}
            <form onSubmit={submitHandler}>
                <input type="text" name="email" placeholder="Email"></input>
                <input  type="password" name="pass2" placeholder="Confirmez le mot de passe"></input>
                <input type="submit"></input>
            </form>
        </>

    )
}