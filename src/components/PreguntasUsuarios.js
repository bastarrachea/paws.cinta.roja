import React from 'react'

const PreguntasUsuarios = () => {
    return (
        <div>
            <h2 className="segundoTexto" id="usuarios"> Preguntas para usuarios </h2>
       <div className= "container d-flex d-flex justify-content-between mt-5" > 
         <div className="seccion-izquierda">
           <div>
             <h5>Comenzar</h5>
             <p><a href="">¿Que es Paws?</a></p>
             <p><a href="">¿Paws es apto para mi mascota?</a></p>
             <p><a href="">¿Como me registro?</a></p>
         </div>
           </div>
       
            <div className="seccion-derecha">
             <h5>Cuenta y Perfil</h5>
             <p><a href="">¿Como recupero mi contraseña?</a></p>
             <p><a href="">¿Como registro mi telefono?</a></p>
             <p><a href="">¿Como desactivar mi cuenta?</a></p>
           </div>
 
           <div className="seccion-derecha">
             <h5>Encuentra al cuidador ideal</h5>
             <p><a href="">¿Que servicios ofrecen?</a></p>
             <p><a href="">¿Como encuentro al cuidador ideal para mi?</a></p>
             <p><a href="">¿Como califico a los cuidadores?</a></p>
           </div>
 
        </div>
 
        <div className= "container d-flex d-flex justify-content-between mt-5" > 
         <div className="seccion-izquierda">
           <div>
             <h5>Reservaciones</h5>
             <p><a href="">¿Como puedo cancelar el servicio?</a></p>
             <p><a href="">¿Tiene algun costo la cancelació?</a></p>
             <p><a href="">¿Como me rembolsaran el pago?</a></p>
         </div>
           </div>
       
            <div className="seccion-derecha">
             <h5>Pagos</h5>
             <p><a href="">¿Debo de dar propina al cuidador?</a></p>
             <p><a href="">¿Como pago el servicio?</a></p>
             <p><a href="">¿Cuando se cobrara el servicio?</a></p>
           </div>
 
           <div className="seccion-derecha">
             <h5>Seguridad</h5>
             <p><a href="">¿Mi mascota esta segura en Paws?</a></p>
             <p><a href="">¿Que garantia maneja Paws?</a></p>
             <p><a href="">¿Como se mantienen mis datos personales?</a></p>
           </div>
 
        </div>
        </div>
    )
}

export default PreguntasUsuarios
