
import React from 'react';

const Seccion5 = () => {
  return (
    <div className="container">
      <div>
        <h3 className="segundoTexto"> Se parte de nuestro equipo</h3>
      </div>
      <div className="card-body mb-4">
        <div className="steps-form">
          <div className="steps-row setup-panel">
            <div className="steps-step">
              <a href="#step-9" type="button" className="btn btn-indigo btn-circle"></a>
              <img src="https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_1280.png" className="imagenStep" />
              <h5>Crea tu perfil.</h5>
              <p className="mr-4">Sube la informacion necesaria para tener cuenta con nostros.</p>
            </div>
            <div className="steps-step">
              <a href="#step-10" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
              <img src="https://pngimage.net/wp-content/uploads/2018/06/solicitud-png-2.png" className="imagenStep" />
              <h5>Acepta Solicitudes</h5>
              <p className="mr-4">Comentanos que clase de perros te gustaria cuidar para que te los canalicemos.</p>
            </div>
            <div className="steps-step">
              <a href="#step-11" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTabzxNVLXJ4-bygcIsmndhPKaA9Hq20u3sUrEgkO-Jaej6g4qT&usqp=CAU" class="imagenStep" />
              <h5>Recibe tu Pago</h5>
              <p className="mr-4">Los pagos estaran disponibles dos dias despues de que se hayan hecho.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Seccion5;