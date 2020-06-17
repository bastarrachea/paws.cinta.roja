import React from 'react'

const PreguntasCuidadores = () => {
    return (
        <div>
           <h2 className="segundoTexto" id="cuidadoresMascota"> Preguntas para cuidadores </h2>
        <div className="container d-flex d-flex justify-content-between mt-5" >
            <div className="seccion-izquierda">
                <div>
                    <p><a href="">¿Como convertirme en cuidador?</a></p>
                    <p><a href="">¿Cuales son los cargos del servicio?</a></p>
                    <p><a href="">Preguntas frecuentes de cuidadores</a></p>
                </div>
            </div>
            <div className="seccion-derecha">
                <h5>Conectarte con el cuidador</h5>
                <p><a href="">¿Como contactarme con mi cuidador?</a></p>
                <p><a href="">¿Como cancelar el servicio?</a></p>
                <p><a href="">¿Hay cargos de cancelacion?</a></p>
            </div>
            <div className="seccion-derecha">
                <h5>Impuestos</h5>
                <p><a href="">¿Se cobra IVA?</a></p>
                <p><a href="">¿Los impuestos estan ya incluidos?</a></p>
                <p><a href="">¿Como cuidador como pago mis impuestos?</a></p>
            </div>
        </div>
        <div className="container d-flex d-flex justify-content-between mt-5" >
            <div className="seccion-izquierda">
                <div>
                    <h5>Mi perfil</h5>
                    <p><a href="">¿Como puedo poner limite de trabajo?</a></p>
                    <p><a href="">¿Como manejo mi calendario?</a></p>
                    <p><a href="">¿Puedo modificar el horario?</a></p>
                </div>
            </div>
            <div className="seccion-derecha">
                <p><a href="">¿Donde veo mis pagos?</a></p>
                <p><a href="">¿Como se me va a pagar?</a></p>
                <p><a href="">¿Cuanto tarda en procesar el pago?</a></p>
            </div>
            <div className="seccion-derecha">
                <h5>Seguridad</h5>
                <p><a href="">¿Como se que mis datos estan seguros?</a></p>
                <p><a href="">¿Como funciona el sistema de seguridad?</a></p>
                <p><a href="">¿Como asegurar mis pagos en la aplicacion?</a></p>
            </div>
        </div> 
        </div>
    )
}

export default PreguntasCuidadores

