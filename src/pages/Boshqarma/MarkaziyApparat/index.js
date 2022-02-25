import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';


const dataaa = [
    {
        id: 1,
        img: "/img/rah1.png",
        name: "Xamrayev Shavkat Raximovich",
        range: "Vazir",
        number: "+998 90 000 00 00",
        email: "Vazir@mail.com",
        bio: "Ушбу устав Сирдарё-Сўх ирригация тизимлари хавза бошқармаси хузуридаги Сўх-Оқтепа ирригация тизими бошқармаси ( кейинги ўринларда ирригация тизими бошқармаси деб аталади), мақоми, асосий вазифалари, функциялари ва хуқуқларини ҳамда фаолиятини ташкилий асосларини белгилайди."
    },
    {
        id: 2,
        img: "/img/rah1.png",
        name: "Xamrayev Shavkat Raximovich",
        range: "Vazir",
        number: "+998 90 000 00 00",
        email: "Vazir@mail.com",
        bio: "Ушбу устав Сирдарё-Сўх ирригация тизимлари хавза бошқармаси хузуридаги Сўх-Оқтепа ирригация тизими бошқармаси ( кейинги ўринларда ирригация тизими бошқармаси деб аталади), мақоми, асосий вазифалари, функциялари ва хуқуқларини ҳамда фаолиятини ташкилий асосларини белгилайди."
    },
    {
        id: 3,
        img: "/img/rah1.png",
        name: "Xamrayev Shavkat Raximovich",
        range: "Vazir",
        number: "+998 90 000 00 00",
        email: "Vazir@mail.com",
        bio: "Ушбу устав Сирдарё-Сўх ирригация тизимлари хавза бошқармаси хузуридаги Сўх-Оқтепа ирригация тизими бошқармаси ( кейинги ўринларда ирригация тизими бошқармаси деб аталади), мақоми, асосий вазифалари, функциялари ва хуқуқларини ҳамда фаолиятини ташкилий асосларини белгилайди."
    }
]

const MarkaziyApparat = () => {

    

    return (
        <div>
            <section className='text-section rah-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title-name'>
                                <h3>Markaziy aparat</h3>
                                <div className='text-title-line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='row pl-3 pr-3'>
                        <div className='col rah-card'>

                            {
                                dataaa.map(item => (
                                    <Card key={item.id} style={{ width: '100%', marginTop: "20px" }}>
                                        <Row className='no-gutters'>
                                            <Col md={3} lg={3} className="text-center" >
                                                <Card.Img variant="top" width="100%" src={item.img} />
                                                <Card.Title className='mt-2 mb-2'>{item.name}</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Body style={{ paddingBottom: "50px" }}>
                                                    <div>
                                                        <Table striped bordered hover>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Lavozimi:</td>
                                                                    <td>{item.range}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Qo’l tel:</td>
                                                                    <td>{item.number}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>E-mail:</td>
                                                                    <td>{item.email}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <Accordion>
                                                        <AccordionSummary
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography>Biografiya</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography className='rah-text'>
                                                                {item.bio}
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarkaziyApparat;
