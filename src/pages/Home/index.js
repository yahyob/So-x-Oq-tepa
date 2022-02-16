import React from 'react';
import Carousels from './Carousel';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3Home from './Section3';
import Section4Home from './Section4';

const Home = () => {
    return (
        <>
            <Carousels />
            <Section1 />
            <Section2 />
            <Section3Home />
            <Section4Home />
        </>
    );
}

export default Home;
