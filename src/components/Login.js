import axios from "axios"
import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../App'

export default function Login() {
    const context = useContext(AppContext)
    const submitHandler = (e) => {
        e.preventDefault()
        const data = e.target
        const log = {
            mail: data[0].value,
            password: data[1].value,
        }
        axios.post('http://localhost:3002/register/auth/login',
            log,
        ).then(result => {
            console.log(result)
            context.logUser(result.data)
        })
    }

    return (
        <>
            {context.log ? <Navigate to="/recherche" /> : null}
               <form onSubmit={submitHandler}>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="email" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="pass2" required/>

                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"/>
                        </label>
                    </div>
               </form>
        </>

    )
}