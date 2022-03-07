import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { PHOTO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

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

const FotoDetails = () => {
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const {t, lang} = useT();

    const getPhotos = useCallback(
        async () => {
            baseApi.fetchAll(PHOTO_URL)
            .then(response => {
                setPhotos(response.data);
                setisLoading(false)
            })
        }, []);

    useEffect(() => {
        getPhotos();
    })

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Fotogalereya.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>Loading...</h5> : photos.filter(item => item.created_at == id).map(card => (
                            card.detail.map(item => (
                                <div className='col-md-4 mb-4'>
                                    <img src={item.image} width="100%" />
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default FotoDetails;
