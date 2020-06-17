import React from 'react'

function Form() {
    return (
        <div>
            <form className="container mt-4">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Correo</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder=""/>
                    </div>
                        <div className="form-group col-md-6">
                            <label for="inputState">¿De que tamaño es tu mascota?</label>
                            <select id="inputState" className="form-control">
                                <option selected disabled value="">Selecciona</option>
                                <option>Pequeña</option>
                                <option>Mediana</option>
                                <option>Grande</option>
                                <option>Extra-Grande</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Calle 1</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                    </div>
                        <div className="form-group">
                            <label for="inputAddress2">Calle 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
                        </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">Ciudad</label>
                                    <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState">Estado</label>
                                        <select id="inputState" className="form-control">

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
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputZip">Código postal</label>
                                        <input type="text" className="form-control" id="inputZip"/>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                <label className="form-check-label" for="gridCheck">
                                                    Acepto terminos y condiciones
                                                 </label>
                                    </div>
                </div>
                                        <button type="submit" className="btn btn-primary">Envíar solicitud</button>
            </form>
        </div>
    )
}

export default Form
