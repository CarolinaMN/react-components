import React, {Component, useState, useEffect} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TableDinamica from './Components/Table_Dinamica';
import Login from './Components/Login';
import Persona from './Components/Persona';
import Peticiones from './Components/Peticiones';
import PersonNew from './Components/PersonNew';
import PersonUpdate from './Components/PersonUpdate';
import Register from './Components/Register';

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
        <Link id="link" to="/">Login</Link>
        <Link id="link" to="/tabla">Tabla</Link>
        <Link id="link" to="/persona/Guayaquil">Persona</Link>
        <Link id="link" to="/peticiones">Peticiones</Link>
        <Link id="link" to="/register">Registro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login></Login>}>
        </Route>
        <Route path="/tabla" element={<TableDinamica></TableDinamica>}>
        </Route>
        <Route path="/persona/:address" element={<Persona name="Andrea" lastName="Cevallos" age="20" ></Persona>}>
        </Route>
        <Route path="/peticiones" element={<Peticiones></Peticiones>}>
        </Route>
        <Route path="/personnew" element={<PersonNew></PersonNew>}>
        </Route>
        <Route path="/personupdate/:id" element={<PersonUpdate></PersonUpdate>}>
        </Route>
        <Route path="/register" element={<Register></Register>}>
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