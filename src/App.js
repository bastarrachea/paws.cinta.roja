import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import preguntas from './containers/preguntas';
import LandingPage from './containers/LandingPage';

import NotFound from "./containers/NotFound";
import IniciarSesion from './containers/IniciarSesion';
import Registrate from './containers/Registrate';
import Cuidadores from './containers/Cuidadores';







const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/preguntas" component={preguntas} />
        <Route exact path="/iniciar-sesion" component={IniciarSesion} />
        <Route exact path="/registrate" component={Registrate} />
        <Route exact path="/cuidadores" component={Cuidadores} />
        
        <Route component={NotFound} />

  
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
