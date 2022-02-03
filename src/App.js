import React, {Component, useState} from 'react';
import Persona from './Persona';
import "./App.css";
import Table from './Table';
import Table_Dinamica from './Table_Dinamica';

class App extends Component{
  render(){
    const upDataState1 = val => {
      
    };
    let datos = [
      { 
        nombre: 'Carolina',
        apellido: 'Laaz',
        edad: '23'
      },
      { 
        nombre: 'Karla',
        apellido: 'Jaume',
        edad: '27'
      },
    ]

    return (
      <div>
        <h1>Mi primer componente</h1>
        <Table data={datos} onClick={upDataState1}></Table>
        <Table_Dinamica></Table_Dinamica>
      </div>
    )}
}

export default App