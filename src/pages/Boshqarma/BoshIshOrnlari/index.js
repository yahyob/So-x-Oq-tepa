import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import './style.css'

const accor = [
    {
        id: 1,
        name: "Moliyachi",
        malumoti: "Oliy",
        staj: "3 yil",
        umumData: " 1C va Exelni a’lo darajada bilishi, - Ish vaqti 9:00 da 6:00 gacha, - Ishga talabchan"
    },
    {
        id: 2,
        name: "Haydovchi",
        malumoti: "Oliy",
        staj: "3 yil",
        umumData: " 1C va Exelni a’lo darajada bilishi, - Ish vaqti 9:00 da 6:00 gacha, - Ishga talabchan"
    },
    {
        id: 3,
        name: "Varius quis quisque facilisi sem.",
        malumoti: "Oliy",
        staj: "3 yil",
        umumData: " 1C va Exelni a’lo darajada bilishi, - Ish vaqti 9:00 da 6:00 gacha, - Ishga talabchan"
    },
    {
        id: 4,
        name: "Mi nisl eget elementum.",
        malumoti: "Oliy",
        staj: "3 yil",
        umumData: " 1C va Exelni a’lo darajada bilishi, - Ish vaqti 9:00 da 6:00 gacha, - Ishga talabchan"
    },
    {
        id: 5,
        name: "Mi nisl eget elementum.",
        malumoti: "Oliy",
        staj: "3 yil",
        umumData: " 1C va Exelni a’lo darajada bilishi, - Ish vaqti 9:00 da 6:00 gacha, - Ishga talabchan"
    },
]

const BoshIshOrinlari = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Bo’sh ish o’rinlari</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3 ish-orin '>BIZDAGI BO’SH ISH O’RINLARI</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3 mt-4'>
                    <div className='col'>
                        <Accordion>
                            {
                                accor.map(item => (
                                    <Accordion.Item eventKey={item.id}>
                                        <Accordion.Header className='d-flex justify-content-center w-100'>
                                            <h5 className='p-0 m-0'>{item.name}</h5> <span className='text-secondary p-0 mt-1 ml-5'> Shartlari</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <h6>Malumoti:</h6> - {item.malumoti}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Ish staji: </h6> - {item.staj}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Umumiy ma'lumotlar:</h6>  - {item.umumData}
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoshIshOrinlari;
