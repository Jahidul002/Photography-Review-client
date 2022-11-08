import React from 'react';
import DetailsBloGG from './DetailsBloGG';
import DetailsBloG from './DetailsBloG';
import Banner from './Banner';
import Demo from './Demo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DetailsBloGG></DetailsBloGG>
            <DetailsBloG></DetailsBloG>
            <Demo></Demo>
        </div>
    );
};

export default Home;