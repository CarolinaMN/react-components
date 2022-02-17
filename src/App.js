import React, {Component, useState, useEffect} from 'react';
import "./Style/App.css";
import "./Style/Components.css";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import LinkRoutes from './routes';
import Header from './Layout/Header/Header';


function App (){
  return (
    <Router>
      <Header></Header>
      <LinkRoutes></LinkRoutes>
    </Router>
    )
}


export default App