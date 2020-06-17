import React from 'react';


const CentralImagePreg = () => {
    return (
        <div className="corregirImagen">
             <img src="https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281__480.jpg" alt="Snow" style={{width: 100 + "%"}}/>
             <div className="centered">
             <h2>Centro de Ayuda Paws</h2>
             <input className="form-control  lime-border" type="text" placeholder="Search" aria-label="Search"/>
             <div className="input-group-append">
             <div className="search">
             <p>Temas: <a href="preguntas.html#cuidadoresMascota">Soy un cuidador</a> <a href="preguntas.html#usuarios" className="ml-2">Soy un Usuario</a></p> 
             </div>
             </div>
             </div>
        </div>
    )
}

export default CentralImagePreg
