import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TarjimaiyHol = () => {

    const [autobi, setAutobi] = useState({
        fish: "",
        email: "",
        phoneNumber: "",
        descr: ""
    })

    const { fish, email, phoneNumber, descr } = autobi;

    changeHandler = e => {
        setAutobi({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(autobi);
    }

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>Tarjimaiy hol</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12'>
                        <h5 className='mt-3 mb-3'>Bo`sh ish o`rinlariga tarjimai hol jo`natish</h5>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form onSubmit={submitHandler}>

                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>F.I.SH. :</Form.Label>
                                <Form.Control onChange={changeHandler}
                                    type="text"
                                    value={fish}
                                    placeholder="To’liq isimsharfingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>El. pochta :</Form.Label>
                                <Form.Control onChange={changeHandler}
                                    type="text"
                                    value={email}
                                    placeholder="Elektron pochta manzilingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tel. raqam :</Form.Label>
                                <Form.Control onChange={changeHandler}
                                    type="text"
                                    value={phoneNumber}
                                    placeholder="Telefon raqamingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Qisqacha murojat matni :</Form.Label>
                                <Form.Control onChange={changeHandler}
                                    value={descr}
                                    placeholder='Qisqacha murojat matni kiriting....'
                                    as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                                <Form.Label>Fayl biriktirish :</Form.Label>
                                <Form.Control onChange={changeHandler} type="file" />
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

export default TarjimaiyHol;
