import React from 'react';
import './style.css'

const Statistika = () => {

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Statistika</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3 pb-5'>

                    <div>
                        <div class="gallery-wrapper">
                            <div class="image-wrapper">
                                <a href="#lightbox-image-1">
                                    <img src="/img/1.png" alt="" />
                                </a>
                            </div>
                            <div class="image-wrapper">
                                <a href="#lightbox-image-2">
                                    <img src="/img/1.png" alt="" />
                                </a>
                            </div>
                            <div class="image-wrapper">
                                <a href="#lightbox-image-3">
                                    <img src="/img/1.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div class="gallery-lightboxes">

                            <div class="image-lightbox" id="lightbox-image-1">
                                <div class="image-lightbox-wrapper">
                                    <a href="#" class="close"></a>
                                    <a href="#lightbox-image-3" class="arrow-left"></a>
                                    <a href="#lightbox-image-2" class="arrow-right"></a>
                                    <img src="/img/1.png" alt="" />
                                </div>
                            </div>

                            <div class="image-lightbox" id="lightbox-image-2">
                                <div class="image-lightbox-wrapper">
                                    <a href="#" class="close"></a>
                                    <a href="#lightbox-image-1" class="arrow-left"></a>
                                    <a href="#lightbox-image-3" class="arrow-right"></a>
                                    <img src="/img/1.png" alt="" />
                                </div>
                            </div>

                            <div class="image-lightbox" id="lightbox-image-3">
                                <div class="image-lightbox-wrapper">
                                    <a href="#" class="close"></a>
                                    <a href="#lightbox-image-2" class="arrow-left"></a>
                                    <a href="#lightbox-image-1" class="arrow-right"></a>
                                    <img src="/img/1.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className='col-md-6 mb-4'>
                    <a class="my_link" data-gall="gallery01" href="/img/1.png"><img src="/img/1.png" width={"100%"} alt="image alt"/></a>
                    </div> */}

                    {/* <div className='col-md-6 mb-4'>
                    <a class="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a class="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a class="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a class="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a class="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Statistika;


