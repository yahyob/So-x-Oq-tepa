import React from 'react';
import { Button, Form } from 'react-bootstrap';

const MurojatYollash = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>Murojat yo’llash</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12'>
                        <h5 className='mt-3 mb-3'>Veb-sayt orqali murojaat shakli</h5>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form>
                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>F.I.SH. :</Form.Label>
                                <Form.Control type="text" placeholder="To’liq isimsharfingizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tug’ilgan sanangiz :</Form.Label>
                                <Form.Control type="text" placeholder="Tug’ilgan sanangizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Pasport ma’lumotingiz :</Form.Label>
                                <Form.Control type="text" placeholder="Pasport ma’lumotingizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Manzilingiz :</Form.Label>
                                <Form.Control type="text" placeholder="Pochta manzilingizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Pochta indeksi :</Form.Label>
                                <Form.Control type="text" placeholder="Pasport indeksini kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>El. pochta :</Form.Label>
                                <Form.Control type="text" placeholder="Elektron pochta manzilingizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tel. raqam :</Form.Label>
                                <Form.Control type="text" placeholder="Telefon raqamingizni kiriting ..." />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Subyekt turi :</Form.Label>
                                <Form.Select>
                                    <option>Jismoniy shaxsdan</option>
                                    <option>Yuridik select</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Qisqacha murojat matni :</Form.Label>
                                <Form.Control placeholder='Qisqacha murojat matni kiriting....' as="textarea" rows={3} />
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

export default MurojatYollash;
