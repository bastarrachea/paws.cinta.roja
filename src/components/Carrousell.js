import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrousell = () => {
    return (
            <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521_1280.jpg"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
       
    )
}
export default Carrousell


    

