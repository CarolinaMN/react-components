import React, {Component, useState, useEffect} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import LinkRoutes from './routes';
import Header from './Layout/Header/Header';
import { Context } from './Components/Context'

function App (){
  const [ authenticated, setAuthenticated ] = useState(false);

  return (
    <Context.Provider value={{
      authenticated,
      setAuthenticated
    }}>
      <Router>
        <Header></Header>
        <LinkRoutes></LinkRoutes>
      </Router>
    </Context.Provider>
    )
}


export default App