import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import preguntas from './containers/preguntas';
import CentralImagePreg from './components/CentralImagePreg';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/preguntas" component={preguntas} />
       
      </Switch>
       <Footer/>
    </BrowserRouter>
     
    
    
    
    
  );
}

export default App;
