import React from 'react';
import Carrousell from '../components/Carrousell';
import Servicios from "../components/Servicios";
import Form from '../components/Form';
import Texto from '../components/Texto';
import Cards from '../components/Cards';
import Contactanos from '../components/Contactanos';
import PorqueCuidador from '../components/PorqueCuidador';
import Seccion3 from '../components/Seccion3';
import Seccion4 from '../components/Seccion4';
import Seccion5 from '../components/Seccion5';
import Form2 from '../components/Form2';


const LandingPage = () => {
    return (
        <div>


          <Carrousell/>
          <Servicios/>
          <Seccion3/>
          <Form/>
          <Seccion4/>
          <Texto/>
          <Cards/> 
          <Contactanos/> 
          <PorqueCuidador/>
          <Seccion5/>
          <Form2/>

        </div>
    )
}


export default LandingPage


