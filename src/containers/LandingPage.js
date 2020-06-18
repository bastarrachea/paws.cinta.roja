import React from 'react';
import Carrousell from '../components/Carrousell';
import Servicios from '../components/Servicios';
import Form from '../components/Form';
import Texto from '../components/Texto';
import Cards from '../components/Cards';
import Contactanos from '../components/Contactanos';
import PorqueCuidador from '../components/PorqueCuidador';

function LandingPage() {
    return (
        <div>
          <Carrousell/>
          <Servicios/>
          <Form/>
          <Texto/>
          <Cards/> 
          <Contactanos/> 
          <PorqueCuidador/>
        </div>
    )
}

export default LandingPage;
