import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <section className='ptb w-100'>
            <div className="container">
                <div className='row main-title text-center'>
                    <div className='col'>
                        <h1 className='mb-5'>So'ngi Yangiliklar</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-4 mb-4'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/img/1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus tristique nulla risus euismod. Egestas magnis vel hac urna porta orci dignissim consequat ultrices. Diam phasellus enim quis placerat volutpat pretium lacus maecenas a. Phasellus eu in amet augue habitasse cursus nullam elit in. Urna nec aliquam nulla nullam nulla.
                                </Card.Text>
                                <Link to="News"><Button variant="primary">Batafsil</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-6 col-lg-4 mb-4'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/img/1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus tristique nulla risus euismod. Egestas magnis vel hac urna porta orci dignissim consequat ultrices. Diam phasellus enim quis placerat volutpat pretium lacus maecenas a. Phasellus eu in amet augue habitasse cursus nullam elit in. Urna nec aliquam nulla nullam nulla.
                                </Card.Text>
                                <Link to="News"><Button variant="primary">Batafsil</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-6 col-lg-4 mb-4'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/img/1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus tristique nulla risus euismod. Egestas magnis vel hac urna porta orci dignissim consequat ultrices. Diam phasellus enim quis placerat volutpat pretium lacus maecenas a. Phasellus eu in amet augue habitasse cursus nullam elit in. Urna nec aliquam nulla nullam nulla.
                                </Card.Text>
                                <Link to="News"><Button variant="primary">Batafsil</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                    <Link to="news"><Button variant="outline-primary">BARCHA YANGILIKLAR</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;
