import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrousell from './components/Carrousell';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carrousell />
      
      <Switch>
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
