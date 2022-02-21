import React from 'react';
import { Link, useParams } from 'react-router-dom';

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

const Tenddetails = () => {
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
                            <div class="card mb-3">
                                <img src={card.img} class="card-img-top w-100" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{card.title}</h5>
                                        <p class="card-text">{card.body}</p>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Tenddetails;
