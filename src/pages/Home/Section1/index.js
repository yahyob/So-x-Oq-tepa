import React from 'react';
import './style.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeSection1 = () => {
    return (
        <section className='about-section ptb'>
            <div className='container'>
                <div className='row main-title text-center'>
                    <div className='col'>
                        <h1>Xush kelibsiz</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quisque imperdiet etiam id vitae faucibus. Amet sed lectus a scelerisque eu auctor dolor.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7 mb-3 mb-md-0'>
                        <iframe className='iframe-video-about' width="100%" height='100%' src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
                    </div>
                    <div className='col-md-5'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src='/assets/img/1.png' />
                            <Card.Body>
                                <Card.Title>Biz haqimizda</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consectetur pretium lectus ut. Dapibus enim tempus, fusce aliquet morbi quis. Arcu, ut tempor mauris morbi facilisis ultrices hendrerit ipsum arcu. Sed curabitur nunc proin euismod risus. Molestie vestibulum pharetra consectetur nunc. Lacus habitant accumsan sed vitae aliquam suspendisse a a ante.
                                </Card.Text>
                                <Link to="boshqarmaHaqida"><Button variant="primary">Batafsil</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSection1;
