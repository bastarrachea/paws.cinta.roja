import React from 'react';
import Form from 'react-bootstrap/Form';

function Form2() {
  return (
      <Form className='container'>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01">Nombre</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
            <div class="valid-feedback">
              Looks good!
        </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">Apellido</label>
            <input type="text" class="form-control" id="validationCustom02" value="" required />
            <div class="valid-feedback">
              Looks good!
        </div>
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03">Ciudad</label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              Please provide a valid city.
        </div>
          </div>
      

      <div class="col-md-3 mb-3">
        <label for="validationCustom04">Estado</label>
        <select class="custom-select" id="validationCustom04" required>
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
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div class="col-md-3 mb-3">

        <label for="validationCustom05">Codigo Postal</label>
        <input type="text" class="form-control" id="validationCustom05" required/>
        <div class="invalid-feedback">
          Please provide a valid zip.
        </div>

      </div>

      <div class="custom-file m-1 ml-1">
        <input type="file" class="custom-file-input" id="customFileLang" lang="es"/>
        <label class="custom-file-label" for="customFileLang">Adjunta tu ID</label>
      </div>


      </div>
    <div class="form-group mt-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
        <label class="form-check-label" for="invalidCheck">
          Acepto termino y condiciones
        </label>
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Envíar</button>
      </Form>

    )
}

export default Form2;
