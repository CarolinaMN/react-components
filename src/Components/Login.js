import React, {Component, useState} from 'react';
import InPassword from './InPassword';
import axios from 'axios';
import apiInstance from '../axios.interceptor';

export default function Login(){
    const [ success, setSuccess ] = useState(false);
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rememberMe, setRememberMe ] = useState(false);

    const request = () => {
        var data = { username: user,  password: password, rememberMe: rememberMe };
        axios.post('http://45.79.170.253:8080/api/authenticate', data).then(res => {
            var respData = res.data;
            localStorage.setItem('token-react', respData.id_token);
        });
    }


    return(
        <div className="login">
            <h2>INICIO DE SESIÓN</h2>
            <form className="formlogin" >
                <div>
                    <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Usuario"></input>
                </div>
                <div>
                    <InPassword onInput={(d) => setSuccess(d)} onChange={(pass) => setPassword(pass)}></InPassword>
                </div>
            </form>
            <div>
                <button className="btn buttonlogin" disabled={success == false ? true : false}
                onClick={request}>Ingresar</button>
            </div>
        </div>
    )

}