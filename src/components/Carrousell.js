import React from 'react';

const Carrousell = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner corregir-imagen">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__480.jpg" className="d-block w-100" alt="Foto de pixabay"></img>
                </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521__480.jpg" className="d-block w-100" alt="Foto de pixabay"></img>
                    </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2016/03/27/18/27/sky-1283446__480.jpg" className="d-block w-100" alt="foto de pixabay"></img>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
    )
}

export default Carrousell;