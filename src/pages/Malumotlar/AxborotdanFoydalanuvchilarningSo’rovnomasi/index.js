import React from 'react';
import { Table } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';


const AxborotFoydalanuvchisi = () => {

    const { t, lang } = useT();

    return (
        <section className='text-section w-100'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`sorovnoma.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col text-center mb-4'>
                        <h5 className='mt-3 mb-3'>{t(`sorovnomaT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col-12'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>{t(`fio.${lang}`)}</th>
                                    <th>{t(`lav.${lang}`)}</th>
                                    <th>{t(`PhoneNumber.${lang}`)}</th>
                                    <th>{t(`email.${lang}`)}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Kamolov Kenjaboy Abdugʻaniyevich</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AxborotFoydalanuvchisi;
