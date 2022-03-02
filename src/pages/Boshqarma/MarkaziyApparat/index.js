import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';
// import { baseApi } from '../../../api/baseApi';
import { CENTRALHARDWARE_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';

const MarkaziyApparat = () => {

    const [stuff, setStuff] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getStuff = useCallback(
        async () => {
            baseApi.fetchAll(CENTRALHARDWARE_URL)
                .then(response => {
                    setStuff(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getStuff();
    }, []);


    return (
        <div>
            <section className='text-section rah-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title-name'>
                                <h3>{t(`Mapparat.${lang}`)}</h3>
                                <div className='text-title-line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='row pl-3 pr-3 pb-5'>
                        <div className='col rah-card'>

                            {
                                isLoading ? <h5>Loading....</h5> : stuff.map(item => (
                                    <Card key={item.phone_number} style={{ width: '100%', marginTop: "20px" }}>
                                        <Row className='no-gutters'>
                                            <Col md={3} lg={3} className="text-center" >
                                                <Card.Img variant="top" width="100%" src={item.image} />
                                                <Card.Title className='mt-2 mb-2'>{item.fio}</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Body style={{ paddingBottom: "50px" }}>
                                                    <div>
                                                        <Table striped bordered hover>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{t(`lav.${lang}`)}:</td>
                                                                    <td>{item.rank}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>{t(`handPhone.${lang}`)}:</td>
                                                                    <td>{item.phone_number}</td>
                                                                </tr>
                                                                {/* <tr>
                                                                    <td>E-mail:</td>
                                                                    <td>{item.email}</td>
                                                                </tr> */}
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <Accordion className='bg-primary'>
                                                        <AccordionSummary
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography>{t(`bio.${lang}`)}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography className='rah-text'>
                                                                {item.short_bio}
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
