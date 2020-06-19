import React from 'react';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Paws</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Buscar cuidadores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Seccion5">Conviertete en un cuidador</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Servicios">Nuestros servicios</a>
        </li>
      </ul>
        <div id="derecha">
      <ul class="navbar-nav mr-auto " >
      <li class="nav-item">
          <a class="navbar-text ml-4" href="/iniciar-sesion">Iniciar sesion</a>
      </li>
      <li class="nav-item">
        <a class="navbar-text ml-3" href="/registrate">Regístrate</a>
      </li>
      <li class="nav-item">
        <a class="navbar-text ml-3" href="/preguntas">Preguntas frecuentes</a>
      </li>
    </ul>
  </div>
  </div>
  </nav>
  )
}

export default Navbar;