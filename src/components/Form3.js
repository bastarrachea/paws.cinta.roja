import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Form3 = () => {
  const [apellido, setApellido] = useState('');
  const [cp, setCp] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [estado, setEstado] = useState('');
  const [nombre, setNombre] = useState('');
  const ENDPOINT = 'https://pawscintaroja.firebaseio.com/task.json';
  const history = useHistory();

  const handleNombre = (e) => {
    setNombre(e.target.value);
  }

  const handleApellido = (e) => {
    setApellido(e.target.value);
  }

  const handleCp = (e) => {
    setCp(e.target.value);
  }

  const handleCiudad = (e) => {
    setCiudad(e.target.value);
  }

  const handleEstado = (e) => {
    setEstado(e.target.value);
  }

  const createForm3 = (e) => {
    e.preventDefault();

    const body = {
      apellido: apellido,
      cp: cp,
      ciudad: ciudad,
      estado: estado,
      nombre: nombre
    }

    console.log(body);

    if (nombre !== '' && apellido !== '' && cp !== '' && ciudad !== '' && estado !== '' && nombre !== '') {
      axios.post(ENDPOINT, body)
        .then(() => history.push('/Cuidadores'))
        .catch((error) => alert('Ocurrió un error ' + error))
    } else {
      alert('Valores incorrectos')
    }
  }

  return (
    <form className='container'>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="validationCustom01">Nombre</label>
          <input onChange={handleNombre} type="text" className="form-control" id="nombre" required />
          <div className="valid-feedback">
            Looks good!
        </div>
        </div>
        <div className="col-md-6 mb-3">
          <label for="validationCustom02">Apellido</label>
          <input onChange={handleApellido} type="text" className="form-control" id="apellido" required />
          <div className="valid-feedback">
            Looks good!
        </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="validationCustom03">Ciudad</label>
          <input onChange={handleCiudad} type="text" className="form-control" id="ciudad" required />
          <div className="invalid-feedback">
            Please provide a valid city.
        </div>
        </div>


        <div className="col-md-3 mb-3">
          <label for="validationCustom04">Estado</label>
          <select className="custom-select" id="state" onChange={handleEstado} required>
            <option selected disabled value="">Selecciona</option>
            <option>Ciudad de México</option>
            <option>Aguascalientes</option>
            <option>Baja California </option>
            <option>Baja California Sur</option>
            <option>Campeche</option>
            <option>Chiapas</option>
            <option>Chihuahua</option>
            <option>Coahuila de Zaragoza</option>
            <option>Colima</option>
            <option>Durango</option>
            <option>Guanajuato</option>
            <option>Guerrero</option>
            <option>Hidalgo</option>
            <option>Michoacán de Ocampo </option>
            <option>Jalisco</option>
            <option>Morelos</option>
            <option>Nayarit</option>
            <option>Nuevo León</option>
            <option>Oaxaca</option>
            <option>Puebla</option>
            <option>Querétaro</option>
            <option>Quintana Roo</option>
            <option>San Luis Potosí</option>
            <option>Sinaloa</option>
            <option>Sonora</option>
            <option>Tabasco</option>
            <option>Tamaulipas</option>
            <option>Tlaxcala</option>
            <option>Veracruz de Ignacio de la Llave</option>
            <option>Yucatán</option>
            <option>Zacatecas</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid state.
        </div>
        </div>
        <div className="col-md-3 mb-3">

          <label for="validationCustom05">Codigo Postal</label>
          <input onChange={handleCp} type="text" className="form-control" id="cp" required />
          <div className="invalid-feedback">
            Please provide a valid zip.
        </div>

        </div>

        {/* <div className="custom-file m-1 ml-1">
          <input type="file" className="custom-file-input" id="id" lang="es" />
          <label className="custom-file-label" for="customFileLang">Adjunta tu ID</label>
        </div> */}


      </div>
      <div className="form-group mt-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="invalidCheck" required />
          <label className="form-check-label" for="invalidCheck">
            Acepto termino y condiciones
        </label>
          <div className="invalid-feedback">
            You must agree before submitting.
        </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit" onClick={createForm3}>Envíar</button>
    </form>

  )
}


export default Form3