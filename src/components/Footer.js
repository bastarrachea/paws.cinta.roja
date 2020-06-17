import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="page-footer font-small mdb-color light-3 pt-4 fondoColor mt-4">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 class="font-weight-bold text-uppercase mb-4">Paws</h5>
                        <p>El mejor companero para tu mascota.</p>
                        <p>Cuando quieras ...</p>
                        <p>Donde quieras ...</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none"></hr>
                    <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 class="font-weight-bold text-uppercase mb-4">Acerca de Nosotros</h5>

                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <a href="#!">Nuestro Blog</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">Contactanos</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">Noticias</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">Reconocimientos</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none"></hr>
                    <div class="col-md-2 col-lg-2 text-center mx-auto my-4 ">
                    <h5 class="font-weight-bold text-uppercase mb-4">Siguenos</h5>
                    <div class="d-flex flex-column bd-highlight m-4">
                    <a type="button" class="btn-floating btn-fb">
              <i class="fab fa-facebook-f"></i>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/fb+social+social+network+icon-1320191784253690412.png"
                class="socialmedia"/>
            </a>
            <a type="button" class="btn-floating btn-tw">
              <i class="fab fa-twitter"></i>
              <img
                src="https://www.pngkit.com/png/full/432-4329572_imagen-foto-00000003-imagen-foto-00000002-twitter-logo.png"
                class="socialmedia"/>
            </a>
            <a type="button" class="btn-floating btn-gplus">
              <i class="fab fa-google-plus-g"></i>
              <img
                src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
                class="socialmedia"/>
            </a>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
