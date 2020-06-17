import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import preguntas from './containers/preguntas';
import CentralImagePreg from './components/CentralImagePreg';


import Navbar from './components/Navbar';
import Carrousell from './components/Carrousell';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carrousell />
      <Switch>
        <Route exact path="/preguntas" component={preguntas} />
      </Switch>
  
       <Footer/>


     
     
    </BrowserRouter>

  );
}

export default App;
