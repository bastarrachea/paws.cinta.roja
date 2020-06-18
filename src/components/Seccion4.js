
import React from 'react';

const Seccion4 = () => {
    return (
        <div className='container'>
            <div>
                <h3 className="segundoTexto"> Encuentra al mejor compañero para tu mascota.</h3>
            </div>
            <div className="container">
                <div className="card-body mb-4">
                    <div className="steps-form">
                        <div className="steps-row setup-panel">
                            <div className="steps-step">
                                <a href="#step-9" type="button" class="btn btn-indigo btn-circle"></a>
                                <img src="https://i.dlpng.com/static/png/1260280-arizona-jobs-search-jobs-in-phoenix-arizona-jobingcom-blue-people-png-575_396_preview.png" className="imagenStep" />
                                <h5>Busca al compañero ideal.</h5>
                                <p className="mr-4">Busca paseadores cerca de tus alrededores.</p>
                            </div>
                            <div className="steps-step">
                                <a href="#step-10" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdDNzmSC90GLYRUn8z857Mr8RCCozoyTwiI8jj2LEi4pCc5N16&usqp=CAU" className="imagenStep" />
                                <h5>Conocelo en persona.</h5>
                                <p className="mr-4">Conectate con el compañero que elegiste.</p>
                            </div>
                            <div className="steps-step">
                                <a href="#step-11" type="button" className="btn btn-default btn-circle" disabled="disabled"></a>
                                <img src="https://pngimg.com/uploads/credit_card/credit_card_PNG126.png" className="imagenStep" />
                                <h5>Reserva y paga.</h5>
                                <p className="mr-4">Todos los pagos son totalmente seguros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Seccion4;