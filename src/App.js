import React, {Component, useState, useEffect} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TableDinamica from './Components/Table_Dinamica';
import Login from './Components/Login';
import Persona from './Components/Persona'


function App (){

  // const [ titleVariable, setTitle ] = useState('Proge');

  // useEffect(() => {
  //   document.title = titleVariable
  // }, [titleVariable]);

  // const change = (e) => {
  //   setTitle(e.target.value)
  // };

  return (
    <BrowserRouter>
      <nav>
        {/* Menú */}
        <Link to="/">Login</Link>
        <Link to="/tabla">Tabla</Link>
        <Link to="/persona/Guayaquil">Persona</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login></Login>}>
        </Route>
        <Route path="/tabla" element={<TableDinamica></TableDinamica>}>
        </Route>
        <Route path="/persona/:address" element={<Persona name="Andrea" lastName="Cevallos" age="20" ></Persona>}>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App


    {/*<div>

       <input onChange={(e) => change(e)}></input>
       <p>{title}</p>
       <button onClick={change}>
         Cambiar titulo
       </button> 

    </div>*/}