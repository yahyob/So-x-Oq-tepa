import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MurojatYollash = () => {

    const [fio, setFio] = useState('');
    const [birthday, setBirthday] = useState('');
    const [passport, setPassport] = useState('');
    const [address, setAddress] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [entity, setEntity] = useState('');
    const [content, setContent] = useState('');

    var formData = new FormData();

    formData.append('fio', fio);
    formData.append('birthday', birthday);
    formData.append('passport', passport);
    formData.append('address', address);
    formData.append('postal_code', postal_code);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('entity', entity);
    formData.append('content', content);

    const SubmitHandler = () => {
        axios.post('http://94.228.124.9/api/appeal/', formData)
            .then(res => {
                alert("Success");
                // setFio(''), 
                // setBirthday(''),
                // setPassport(''),
                // setAddress(''),
                // setPostal_code(''),
                // setEmail(''),
                // setPhone_number(''),
                // setEntity(''),
                // setContent('')
            }).catch((err) => alert("Error"))
    }

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
                                <Form.Control
                                    value={fio}
                                    onChange={e => setFio(e.target.value)}
                                    type="text"
                                    placeholder="To’liq ism-sharfingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tug’ilgan sanangiz :</Form.Label>
                                <Form.Control
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                    type="date"
                                    placeholder="Tug’ilgan sanangizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Pasport ma’lumotingiz :</Form.Label>
                                <Form.Control
                                    value={passport}
                                    onChange={e => setPassport(e.target.value)}
                                    type="text"
                                    placeholder="Pasport ma’lumotingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Manzilingiz :</Form.Label>
                                <Form.Control
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="Pochta manzilingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Pochta indeksi :</Form.Label>
                                <Form.Control
                                    value={postal_code}
                                    onChange={e => setPostal_code(e.target.value)}
                                    type="text"
                                    placeholder="Pasport indeksini kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>El. pochta :</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Elektron pochta manzilingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tel. raqam :</Form.Label>
                                <Form.Control
                                    value={phone_number}
                                    onChange={e => setPhone_number(e.target.value)}
                                    type="text"
                                    placeholder="Telefon raqamingizni kiriting ..." />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Subyekt turi :</Form.Label>
                                <Form.Select
                                    value={entity}
                                    onChange={e => setEntity(e.target.value)}
                                >
                                    <option value='legal'>Jismoniy shaxs</option>
                                    <option value='physical' selected>Yuridik shaxs</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Qisqacha murojat matni :</Form.Label>
                                <Form.Control
                                    value={content}
                                    onChange={e => setContent(e.target.value)} placeholder='Qisqacha murojat matni kiriting....' as="textarea" rows={3} />
                            </Form.Group>

                            <Button onClick={() => SubmitHandler()} variant="primary" type="button">
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
