import React from 'react';
import { Link, useParams } from 'react-router-dom';

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

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
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
                        tend.filter(item => item.id == id).map(card => (
                            card.detail.map(item => (
                                <div className='col-md-4 mb-4'>
                                    <img src={item} width="100%" />
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
