import React from 'react'

function Cards() {
    return (
            <div className="container d-flex justify-content-center">
                <div className="card mr-4" >
                    <img className="card-img-top imagenCard" src="https://storage.googleapis.com/support-forums-api/attachment/thread-14135986-12629437928175657792.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5>Monitoreo en tiempo real</h5>
                            <p className="card-text">Podrás consultar desde casa, trabajo o en el extranjero cada huella en tiempo real</p>
                        </div>
                        <p className="card-text "><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>

                    <div className="card mr-4" >
                        <img className="card-img-top imagenCard" src="https://www.pollclash.com/wp-content/uploads/2020/03/Create-An-App-For-Free.png" alt="Card image cap"/>
                            <div className="card-body">
                                <h5>Aplicación movil</h5>
                                <p className="card-text">Pide un compañero para sacar a pasear a tu mascota y monitorea todo el trayecto.</p>
                            </div>
                            <p className="card-text "><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                        <div className="card mr-4">
                            <img className="card-img-top imagenCard" src="https://image.flaticon.com/icons/png/512/1168/premium/1168845.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5>Califica al compañero</h5>
                                    <p className="card-text">Esto ayudará a mejorar y mantener nuestro nivel de servicio para que tu mascota feliz.</p>
                                </div>
                                <p className="card-text "><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>

            </div>
       
    )
}

export default Cards
