import React from 'react'

const IniciarSesion = () => {
    return (
        <div>
            <div id="mainUno">
<section className="main" >
  <div className="sub-main-one">
    <div className="img">
      <img src="Paws.png" alt="Paws" class="paws"/>
    </div>
    <form className="sign-in">
      <div className="form-group">
        <label for="exampleInputEmail1"  >Correo electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tus datos con terceros.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
        <small id="passwordlHelp" class="form-text text-muted"><a href="">Olvide mi contraseña.</a> </small>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">No cerrar la sesión</label>
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>

  <div class="sub-main-two ">
    <section class="sub-main-two-a mr-3 " id="bienvenido">
      <h2>¡Bienvenido a Paws!</h2>
      <p><h4>El mejor compañero para tu mascota.</h4></p>
      <p>¿Eres nuevo miembro?</p>
      <button id="blanco" type="submit" class="btn btn-primary"><a href="/registrate">Regístrate</a></button>
    </section>

  </div>
</section>
</div>
        </div>
    )
}

export default IniciarSesion
