import React, {Component, useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [user, setUser] = useState({
        login: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        langKey: "es"
    });

    const navegate = useNavigate();

    const loadData = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const save = () => {
        axios.post('http://45.79.170.253:8080/api/register', user)
        .then(res => {
            navegate('/');
        }).catch(()=> {
            console.log("Error")
        })
    }

    return(
        <div>
            <h2>REGISTRO DE USUARIO</h2>
            <form className="formlogin" >
                <div>
                    <label>Login</label>
                    <input value={user.login} onChange={(event) => loadData(event)} type="text" name="login" placeholder="Login"></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input value={user.password} onChange={loadData} type="password" name="password" placeholder="Contraseña"></input>
                </div>
                <div>
                    <label>Nombre</label>
                    <input value={user.firstName} onChange={loadData} type="text" name="firstName" placeholder="Nombre"></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" value={user.lastName} onChange={loadData} name="lastName" placeholder="Apellido"></input>
                </div>
                <div>
                    <label>Correo</label>
                    <input type="text" value={user.email} onChange={loadData} name="email" placeholder="Correo"></input>
                </div>
            </form>
            <div>
                <button className="btn buttonlogin" onClick={save}>Ingresar</button>
            </div>
        </div>
    )
}