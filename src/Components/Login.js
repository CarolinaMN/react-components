import React, {Component, useState, useContext} from 'react';
import InPassword from './InPassword';
import axios from 'axios';
import apiInstance from '../axios.interceptor';
import { Button, Container, Form } from 'react-bootstrap';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import userImg from '../Style/images/user.png';

export default function Login(){
    const [ success, setSuccess ] = useState(false);
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rememberMe, setRememberMe ] = useState(false);

    const context = useContext(Context);
    const navegate = useNavigate();

    const request = () => {
        var data = { username: user,  password: password, rememberMe: rememberMe };
        apiInstance.post('api/authenticate', data).then(res => {
            var respData = res.data;
            localStorage.setItem('token-react', respData.id_token);
            context.setAuthenticated(true);
            navegate('/');
        });
    }


    return(
        <div className="login">
            <img src={userImg}
                width="160"
                height="160"
            ></img>
            <h3>INICIO DE SESIÓN</h3>
            <br></br>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label >Usuario</Form.Label> */}
                    <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Usuario"></input>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>Contraseña</Form.Label> */}
                    <InPassword onInput={(d) => setSuccess(d)} onChange={(pass) => setPassword(pass)}></InPassword>
                </Form.Group>
                <Button variant="primary" onClick={request}>Ingresar</Button>
            </Form>
        </div>
    )

}