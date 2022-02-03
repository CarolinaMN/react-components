import React from 'react';
import "./Components.css"

export default class Persona extends React.Component{

    render() {
        return (
            <div className="data">
                <p>Nombre: {this.props.name}</p>
                <p>Apellido: {this.props.lastName}</p>
                <p>Edad: {this.props.age} </p>
            </div>
        )
    }
}

