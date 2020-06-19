import React, { useEffect, useState } from 'react';
import Task from '../components/Task';
import axios from 'axios';

const PruebaMB = () => {


const [form3, setForm3]= useState({});
const ENDPOINT = 'https://pawscintaroja.firebaseio.com/task.json';

  // Crear métodos dentro de mi componente
  const getForm3 = () => {
    axios.get(ENDPOINT)
      .then((res) => setForm3(res.data))
      .catch((error) => alert(error));
  }

  // Esto se va a ejecutar cuando se monte el componente
  useEffect(() => {
    getForm3();
  }, []);

  return (
    <div className="bg-light">
      <div className="container">
        <h1>Cuidadores</h1>
        {Object.keys(tasks).map((id) =>
          <Task
            id={id}
            apellido={form3[id].apellido}
            nombre={form3[id].nombre}
            ciudad={form3[id].ciudad}
            estado={form3[id].estado}
            cp={form3[id].cp}
            identificacion={form3[id].identificacion}
            getForm3={getForm3} />)}
      </div>
    </div>
  )
}

export default PruebaMB
