import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import preguntas from './containers/preguntas';
import LandingPage from './containers/LandingPage';





const App = () => {
  return (
    <BrowserRouter>
      <Navbar />


      <Switch>
        <Route exact path="/" component={LandingPage}/> 
        <Route exact path="/preguntas" component={preguntas} />
  
      </Switch>
  
       <Footer/>
     
     
    </BrowserRouter>

  );
}

export default App;
