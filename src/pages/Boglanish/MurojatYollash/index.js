import React from 'react';
import { Button, Form } from 'react-bootstrap';

const MurojatYollashBoglanish = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>Murojat matni </h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form>

                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>F.I.SH. :</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="To’liq isimsharfingizni kiriting ..." 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>El. pochta :</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Elektron pochta manzilingizni kiriting ..." 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Qisqacha murojat matni :</Form.Label>
                                <Form.Control 
                                    placeholder='Qisqacha murojat matni kiriting....' 
                                    as="textarea" rows={3} 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Jo'natish
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MurojatYollashBoglanish;
