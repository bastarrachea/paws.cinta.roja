import React from 'react';
import Carrousell from '../components/Carrousell';
import Servicios from '../components/Servicios';
import Form from '../components/Form';
import Texto from '../components/Texto';
import Cards from '../components/Cards';

function LandingPage() {
    return (
        <div>
          <Carrousell/>
          <Servicios/>
          <Form/>
          <Texto/>
          <Cards/>  
        </div>
    )
}

export default LandingPage;
