import React from 'react';
import { Link, useParams } from 'react-router-dom';

const tend = [
    {
        id: 1,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 1",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar pellentesque sollicitudin consequat amet sit mauris. Id proin tortor, iaculis quis urna posuere lectus proin hendrerit. Id mauris ornare morbi enim dictumst urna. Mattis urna, aliquet netus mattis vitae. Morbi vel dignissim egestas pellentesque. Diam id suspendisse volutpat magna orci tincidunt nisl. Donec semper at eleifend vestibulum pellentesque tellus enim, gravida. Eleifend auctor varius rutrum pharetra nunc sed feugiat sed non. Facilisi duis sed vel ac. Ipsum arcu potenti vulputate consequat, sit. In odio mattis morbi ac sagittis, volutpat urna, aliquet.Iaculis placerat eget ultrices rhoncus ipsum. Diam, aliquet dictum quisque aliquam mauris enim "
    },
    {
        id: 2,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 2",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar pellentesque sollicitudin consequat amet sit mauris. Id proin tortor, iaculis quis urna posuere lectus proin hendrerit. Id mauris ornare morbi enim dictumst urna. Mattis urna, aliquet netus mattis vitae. Morbi vel dignissim egestas pellentesque. Diam id suspendisse volutpat magna orci tincidunt nisl. Donec semper at eleifend vestibulum pellentesque tellus enim, gravida. Eleifend auctor varius rutrum pharetra nunc sed feugiat sed non. Facilisi duis sed vel ac. Ipsum arcu potenti vulputate consequat, sit. In odio mattis morbi ac sagittis, volutpat urna, aliquet.Iaculis placerat eget ultrices rhoncus ipsum. Diam, aliquet dictum quisque aliquam mauris enim "
    },
    {
        id: 3,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 3",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar pellentesque sollicitudin consequat amet sit mauris. Id proin tortor, iaculis quis urna posuere lectus proin hendrerit. Id mauris ornare morbi enim dictumst urna. Mattis urna, aliquet netus mattis vitae. Morbi vel dignissim egestas pellentesque. Diam id suspendisse volutpat magna orci tincidunt nisl. Donec semper at eleifend vestibulum pellentesque tellus enim, gravida. Eleifend auctor varius rutrum pharetra nunc sed feugiat sed non. Facilisi duis sed vel ac. Ipsum arcu potenti vulputate consequat, sit. In odio mattis morbi ac sagittis, volutpat urna, aliquet.Iaculis placerat eget ultrices rhoncus ipsum. Diam, aliquet dictum quisque aliquam mauris enim "
    },
]

const ElonDetails = () => {
    const { id } = useParams();

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>E'lonlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        tend.filter(item => item.id == id).map(card => (
                            <div key={card.id} className='col-12 mb-3'>
                                <div class="card mb-3">
                                    <img src={card.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">{card.title}</h5>
                                            <p class="card-text"><small class="text-muted">{card.start}</small></p>
                                        </div>
                                        <h5>{card.person}</h5>
                                        <p class="card-text">{card.body}</p>
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

export default ElonDetails;
