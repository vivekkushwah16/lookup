import React from 'react';
import './index.css';
import Navbar3 from './Navbar3';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Algebra from './Algebra';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Language from './Language';
import Statistics from './Statistics';
import MlAlgorithms from './MlAlgorithms';
import Libraries from './Libraries';
import Deployment from './Deployment';
import Footer from "./Footer"

function App() {
  return (
    <>
        <Navbar3 />
        <Home/>
        <Language/>
        <Algebra/>
        <Statistics/>
        <MlAlgorithms/>
        <Libraries/>
        <Deployment/>
        <Footer/>
    </>
  );
}

export default App;
