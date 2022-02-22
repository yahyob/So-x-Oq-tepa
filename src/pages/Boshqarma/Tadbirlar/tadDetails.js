import React from 'react';
import { Link, useParams } from 'react-router-dom';

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

const TadDetails = () => {
    const { id } = useParams();
    console.log(id);

    // const topic = tend.find((item) => item.id === id);

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Tendir va tanlovlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        tend.filter(item => item.id == id).map(card => (
                            <div key={card.id} className='col-12 mb-3'>
                                <div className="card mb-3 p-3 tad-card">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            <img src={card.img} className="img-fluid rounded-start" alt="image" />
                                        </div>
                                        <div className="col-12">
                                            <div className="card-body">
                                                <Link to={`${card.id}`} className="card-title"><h5>{card.title}</h5></Link>
                                                <p className="card-text">Tashkilotchi: {card.person}</p>
                                                <p className="card-text">Boshlanish sanasi: {card.start}</p>
                                                <p className="card-text">Tugash sanasi: {card.end}</p>
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

export default TadDetails;
