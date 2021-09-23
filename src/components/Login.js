import React, {useContext, useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext'


const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const history = useHistory();
    const {state, addToEmployee, addToToken} = useContext(AppContext)
    const {employee, tok} = state

    

      const loginUsuario = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/login/', {

        email,
        password

        })
        .then(function (response) {
            tok.push(response.data.access)
            addToEmployee(response.data.user)
        })
        
        .catch(function (error) {
            console.log(error);
        })
        
        .then(() => {
            history.push('/container')
        })


      }


    return(
        <div className="container">
            <form onSubmit={loginUsuario}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    value = {email}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    value = {password}
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

    )
}

export default Login;