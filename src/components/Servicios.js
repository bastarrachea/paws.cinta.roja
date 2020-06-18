import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Servicios = () => {
    return (
        <div>
            <h3 className="segundoTexto"> Servicios para tus mascotas</h3>
            <div className="container">
                <div className="d-flex flex-row d-flex justify-content-around">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                            <h5><img src="https://static.wixstatic.com/media/412a9a_bf4c366db0604859a4c783184a649f86~mv2_d_3280_3297_s_4_2.png" class= "imagenesSmall" /> Hotel</h5>
                            <p>Ideal para que tu mascota tenga compañia durante tus vacaciones.</p>
                            <h5><img src="https://www.pinclipart.com/picdir/big/126-1260626_dog-walking-walk-the-dog-icon-clipart.png" class= "imagenesSmall" />  Caminatas</h5>
                            <p>Disponible para cuando tu mascota necesite salir a pasear.</p>
                            <h5><img src="https://www.pictorem.com/collection/900_Ngan-Hong-Truong_dog%20puppy%20pet%20animal%20cute%20love%20hot%20sexy%20(8).png" class= "imagenesSmall" />  Guarderia</h5>
                            <p>Cuidado de mascotas en el hogar del cuidador.</p>
                            <h5><img src="https://images.squarespace-cdn.com/content/v1/5d13e2828d2cf00001aa60a4/1561685896371-OUXAPMII7EJQF8AY9TJ7/ke17ZwdGBToddI8pDm48kJF_-hoF7KAPhwcFl9Za5WFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIcE3TSGYBlbUGrFDjXochxCso9DV29rvs4k0J2PvhWPQ/image-asset.png" class= "imagenesSmall" />  Visitas</h5>
                            <p>Ayuda para cualquier necesidad que le surga a tu mascota.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header><h5 className="ml-5"><img src="https://www.freeiconspng.com/uploads/recruitment-icon-17.png" class="imagenesSmall" />Contrata Cuidadores de tu Confianza</h5></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <p class="card-text">Todos los cuidadores pasan un test de confianza.</p>
                            <p class="card-text">Todos los cuidadores nos proporcionan su informacion personal.</p>
                            <p class="card-text">Todos los cuidadores son aprovados por nuestros especialistas.</p>
                            </Card.Text>
                            <Button variant="primary" className="btn btn-primary d-flex flex-column">Contrata a un cuidador</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default Servicios;