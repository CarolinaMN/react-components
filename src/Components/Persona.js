import React, { useState, useEffect } from 'react';
import "../Style/Components.css"
import { useParams, useNavigate } from 'react-router-dom';

export default function Persona (props){
        const [ token, setToken ] = useState('');

        const params = useParams();
        const navigate = useNavigate();

        const returnLink = () => {
            navigate('/tabla');
        };

        useEffect(() => {
            var tokenString = localStorage.getItem('token-react');
            setToken(tokenString);

        });

        return (
            <div className="data">
                <p>Nombre: {props.name}</p>
                <p>Apellido: {props.lastName}</p>
                <p>Edad: {props.age} </p>
                <p>Dirección: { params.address}</p>
                <button onClick={returnLink}>Ir ruta</button>
            </div>
        )

}

