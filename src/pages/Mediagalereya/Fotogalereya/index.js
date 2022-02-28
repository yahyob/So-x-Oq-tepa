import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { PHOTO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const tend = [
    {
        id: 1,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 1",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
    {
        id: 2,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 2",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
    {
        id: 3,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 3",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
]

const Fotogalereya = () => {

    const [photos, setphotos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getPhotos = useCallback(
        async () => {
            baseApi.fetchAll(PHOTO_URL)
            .then(response => {
                setphotos(response.data);
                setisLoading(false)
            })
        }, []);

    useEffect(() => {
        getPhotos();
    }, [])

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Fotogalereya</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                    <div className='row'>
                        {
                            isLoading ? <h5>Loading...</h5> : photos.map((item) => (
                                <div key={item.created_at} className='col-md-4 mb-4'>
                                    <div className="card">
                                        <img src={item.detail[0].image} className="card-img-top" alt="image" />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                            <Link to={`${item.created_at}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p className="card-text"><small className="text-muted">{item.created_at}</small></p>
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

export default Fotogalereya;
