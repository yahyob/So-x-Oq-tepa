import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { BASE_URL, NEWS_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import {useT} from '../../../custom/hooks/useT';


const Yangiliklar = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(NEWS_URL)
                .then(response => {
                    setNews(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getNews();
    }, []);

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Yangiliklar.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        isLoading ? <h5>Loading...</h5> : news.map((item) => (
                            <div key={item.created_at} className='col-md-6 mb-3'>
                                <div className="card mb-3">
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                        <Link to={`${item.created_at}`} className="card-title"><h5>{item.title}</h5></Link>
                                            <p className="card-text text-right"><small className="text-muted">{item.created_at.slice(0,10)} <br/> {item.created_at.slice(11,16)}</small></p>
                                        </div>
                                        <h5>{item.author}</h5>
                                        <p className="card-text">{item.content.slice(0, 190)}....</p>
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

export default Yangiliklar;
