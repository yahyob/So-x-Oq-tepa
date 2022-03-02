import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { EVENT_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const tend = [
    {
        id: 1,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 1",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
    {
        id: 2,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 2",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
    {
        id: 3,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 3",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
]

const Tadbirlar = () => {
    const { t, lang } = useT();
    const [isLoading, setisLoading] = useState(true);
    const [ tadbir, setTadbir ] = useState([]);

    const getTadbir = useCallback(
        async () => {
            baseApi.fetchAll(EVENT_URL)
            .then(response => {
                setTadbir(response.data);
                setisLoading(false);
            })
        }, [])

    useEffect(() => {
        getTadbir()
    }, []);

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`tadbir.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}...</h5> : tadbir.map((item) => (
                            <div key={item.title} className='col-12 mb-3'>
                                <div className="card mb-3 p-3 tad-card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid rounded-start" alt="image"/>
                                        </div>
                                        <div className="col-md-8 p-3">
                                            <div className="card-body">
                                                <Link to={`${item.title}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p className="card-text">Tashkilotchi: {item.organizer}</p>
                                                <p className="card-text">Boshlanish sanasi: {item.start_date}</p>
                                                <p className="card-text">Tugash sanasi: {item.end_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Tadbirlar;
