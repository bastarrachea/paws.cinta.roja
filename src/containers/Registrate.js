import React from 'react'

const Registrate = () => {
    return (
        <div>
            <div id="mainUno">
<section className="main" >
  <div className="sub-main-one">
    <div className="img">
      <img src="Paws.png" alt="Paws" class="paws"/>
    </div>
    <form>
        <div className="col form-group">
          <div className="col">
            <input type="text" class="form-control mb-3 formR" placeholder="Nombre"/>
          </div>
          <div className="col">
            <input type="text" class="form-control formR" placeholder="Apellido"/>
          </div>
        </div>
      </form>
    <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Correo electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          <small id="emailHelp" class="form-text text-muted">No compartiremos tus datos sin tu autorizacion.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
        </div>
        <button type="submit" class="btn btn-primary boton-centroUno">Iniciar</button>
      </form>
  </div>

  <div className="sub-main-two  ">
    <section className="sub-main-two-a mr-3 azulDerecha">
      <h2>¿Ya tienes usuario?</h2>
      <p><h4>Inicia sesion aqui.</h4></p>
      <button id="blanco" type="submit" class="btn btn-primary boton-centro"><a href="/iniciar-sesion">Iniciar Sesion</a></button>
    </section>

  </div>
</section>
</div>
        </div>
    )
}

export default Registrate
