import React, {Component, useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiInstance from '../axios.interceptor';
import { Button, Form, Row, Col } from 'react-bootstrap';



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
        apiInstance.post('api/register', user)
        .then(res => {
            navegate('/');
        }).catch(()=> {
            console.log("Error")
        })
    }

    return(
        <div>
            <h2 className="h2-register">REGISTRO DE USUARIO</h2>
            <Row className="form-register-cont">
                <Col md="6">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control value={user.login} onChange={(event) => loadData(event)} type="text" name="login" placeholder="Usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value={user.firstName} onChange={(event) => loadData(event)} type="text" name="firstName" placeholder="Nombre" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control value={user.lastName} onChange={(event) => loadData(event)} type="text" name="lastName" placeholder="Apellido" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control value={user.email} onChange={(event) => loadData(event)} type="text" name="email" placeholder="Correo Electronico" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={user.password} onChange={(event) => loadData(event)}  name="password" type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" onClick={save}>
                            Guardar
                        </Button>
                    </Form>
                </Col>
            </Row>
            {/* <form className="formlogin" >
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
            </div> */}
        </div>
    )
}