import React from 'react';
import "../Style/Components.css"
import { useParams } from 'react-router-dom';


export default function Persona (props){

        const params = useParams();

        return (
            <div className="data">
                <p>Nombre: {props.name}</p>
                <p>Apellido: {props.lastName}</p>
                <p>Edad: {props.age} </p>
                <p>Dirección: { params.address}</p>
            </div>
        )

}

