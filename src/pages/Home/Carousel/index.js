import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
// import slide1 from './1.png'

const Carousels = () => {
    return (
        <div className='w-100'>
            <div class="container-fluid p-0">
                <Carousel>
                    <Carousel.Item>
                        <img height='100%'
                            className="d-block w-100"
                            src='./1.png'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='100%'
                            className="d-block w-100"
                            src="./5.jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='100%'
                            className="d-block w-100"
                            src="./3.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Carousels;
