import React from 'react';

const Servicios = () => {
    return (
        <h3 id="segundoTexto"> Servicios para tus mascotas</h3>
        <div className="container d-flex d-flex justify-content-between" >
            <div className="seccion-izquierda">
                <div>
                    <h5>
                        <img src="https://image.flaticon.com/icons/png/512/90/90549.png" className="imagenesSmall" ></img>
                        Hotel</h5>
                    <p>Ideal para que tu mascota tenga compañia durante tus vacaciones.</p>
                </div>
                <div>
                    <h5>
                        <img src="https://svgsilh.com/svg/297255.svg" className="imagenesSmall" > </img> 
                        <a>  Caminatas</a></h5>
                    <p>Disponible para cuando tu mascota necesite salir a pasear.</p>
                </div>
                <div>
                    <h5>
                        <img src="https://image.flaticon.com/icons/svg/54/54966.svg" className="imagenesSmall" ></img>
                        Guarderia</h5>
                    <p>Cuidado de mascotas en el hogar del cuidador.</p>
                </div>
            </div>
        </div>
              
    )
}

export default Servicios;