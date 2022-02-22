import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const tend = [
    {
        id: 1,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
        body: "Aliquet gravida facilisis id facilisi proin faucibus amet est. Sed turpis interdum orci at. Vitae vulputate viverra purus tempus at velit volutpat nibh rutrum. Adipiscing neque sed ornare eget. Ornare nunc cursus eget praesent amet, libero. Vestibulum viverra molestie sit ut. Et potenti elit ac nibh faucibus faucibus viverra. Non aliquet lobortis vestibulum eleifend suspendisse. In et, nunc viverra faucibus nec risus leo tincidunt cum. Fames sagittis id vulputate fusce ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ornare adipiscing vel lorem nisi pulvinar at.Laoreet purus nibh aliquam tempor tempor adipiscing.Cras neque, fermentum, tincidunt neque.Eget ultricies tortor quam velit.Amet tempor dui, in praesent.Ullamcorper proin nisl nam blandit sed faucibus.Ultricies amet, ante pharetra feugiat senectus pulvinar.Felis enim proin tincidunt eget ipsum tristique.Eu et tempor sit pharetra."
    },
    {
        id: 2,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
        body: "Aliquet gravida facilisis id facilisi proin faucibus amet est. Sed turpis interdum orci at. Vitae vulputate viverra purus tempus at velit volutpat nibh rutrum. Adipiscing neque sed ornare eget. Ornare nunc cursus eget praesent amet, libero. Vestibulum viverra molestie sit ut. Et potenti elit ac nibh faucibus faucibus viverra. Non aliquet lobortis vestibulum eleifend suspendisse. In et, nunc viverra faucibus nec risus leo tincidunt cum. Fames sagittis id vulputate fusce ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ornare adipiscing vel lorem nisi pulvinar at.Laoreet purus nibh aliquam tempor tempor adipiscing.Cras neque, fermentum, tincidunt neque.Eget ultricies tortor quam velit.Amet tempor dui, in praesent.Ullamcorper proin nisl nam blandit sed faucibus.Ultricies amet, ante pharetra feugiat senectus pulvinar.Felis enim proin tincidunt eget ipsum tristique.Eu et tempor sit pharetra."
    },
    {
        id: 3,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
        body: "Aliquet gravida facilisis id facilisi proin faucibus amet est. Sed turpis interdum orci at. Vitae vulputate viverra purus tempus at velit volutpat nibh rutrum. Adipiscing neque sed ornare eget. Ornare nunc cursus eget praesent amet, libero. Vestibulum viverra molestie sit ut. Et potenti elit ac nibh faucibus faucibus viverra. Non aliquet lobortis vestibulum eleifend suspendisse. In et, nunc viverra faucibus nec risus leo tincidunt cum. Fames sagittis id vulputate fusce ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ornare adipiscing vel lorem nisi pulvinar at.Laoreet purus nibh aliquam tempor tempor adipiscing.Cras neque, fermentum, tincidunt neque.Eget ultricies tortor quam velit.Amet tempor dui, in praesent.Ullamcorper proin nisl nam blandit sed faucibus.Ultricies amet, ante pharetra feugiat senectus pulvinar.Felis enim proin tincidunt eget ipsum tristique.Eu et tempor sit pharetra."
    },
]

const TenderTanlovlar = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
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
                        tend.map((item) => (
                            <div key={item.id} className='col-12 mb-3'>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.img} className="img-fluid rounded-start" alt="image"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`${item.id}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p className="card-text">
                                                    {item.body.slice(0, 300)}...
                                                </p>
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

export default TenderTanlovlar;
