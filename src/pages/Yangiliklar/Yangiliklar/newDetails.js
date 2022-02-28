import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEWS_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';

const Newdetails = () => {
    const { id } = useParams();
    const [ news, setNews ] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(NEWS_URL)
            .then(response => {
                setNews(response.data)
                setisLoading(false);
            })
        }, []);

        useEffect(() => {
            getNews()
        }, [])

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Yangiliklar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>Loading...</h5> : news.filter(item => item.created_at == id).map(card => (
                            <div key={card.created_at} className='col-12 mb-3'>
                                <div className="card mb-3">
                                    <img src={card.image} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text text-right"><small className="text-muted">{card.created_at.slice(0,10)} <br/> {card.created_at.slice(11,16)}</small></p>
                                        </div>
                                        <h5>{card.author}</h5>
                                        <p className="card-text">{card.content}</p>
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

export default Newdetails;
