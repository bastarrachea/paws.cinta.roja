import React from 'react';
import dog from '../assets/dog.jpg';

function Contactanos() {
    return (
        <div>
            <h3 className="segundoTexto">Contactanos</h3>
            <div className="container apps">
                <div className="fotoiphone" >
                    <img className="fotoiphone" src={dog} />
                </div>

                <div>
                        <p className="margentexto">Disponible en iOS y Android.</p>
                    </div>

                    <div className="imagenapps">
                        <a href="https://www.apple.com/mx/ios/app-store/"><img className="imagenapps" src="https://blog.goldenmac.info/wp-content/uploads/2015/06/google-play-appstore.png"/></a>
                    </div>
            </div>
        </div>
    )
}

export default Contactanos;
