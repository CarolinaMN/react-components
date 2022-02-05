import React, {Component, useState} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import Table_Dinamica from './Components/Table_Dinamica';
import Login from './Components/Login';
import { Count } from './Components/Count';


function App (){
    const { cont, increment, decrement } = Count(10);
    return (
      <div>
        <h1>Mis Componentes</h1>
          <div className="content">
            <div className="columntotal">
              <Login></Login>
              {/* <h1>{cont}</h1>
              <button onClick={increment}>Incrementar</button>
              <button onClick={decrement}>Decrementar</button>   */}
            </div>
          </div>
      </div>
      )
}

export default App