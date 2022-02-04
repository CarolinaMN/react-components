import React, {Component, useState} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import Table_Dinamica from './Components/Table_Dinamica';
import Login from './Components/Login';

class App extends Component{
  render() {
    return (
      <div>
        <h1>Mis Componentes</h1>
          <div className="content">
            <div className="columntotal">
              <Login></Login>
            </div>
            {/* <div className="column">
              <Table_Dinamica></Table_Dinamica>
            </div>
            <div className="column">
              <Table_Dinamica></Table_Dinamica>
            </div> */}
          </div>
      </div>
    )}
}

export default App