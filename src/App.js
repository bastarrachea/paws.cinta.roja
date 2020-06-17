import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrousell from './components/Carrousell';
import Servicios from './components/Servicios';
import Form from './components/Form';
import Texto from './components/Texto';
import Cards from './components/Cards';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carrousell />
      <Servicios/>
      <Form/>
      <Texto/>
      <Cards/>
   
      
      <Switch>
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
