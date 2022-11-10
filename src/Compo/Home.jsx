import React from 'react';
import DetailsBloGG from './DetailsBloGG';
import DetailsBloG from './DetailsBloG';
import Banner from './Banner';
import Demo from './Demo';
import Gif from './Gif';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DetailsBloGG></DetailsBloGG>
            <DetailsBloG></DetailsBloG>
            <Gif></Gif>
            <Demo></Demo>
        </div>
    );
};

export default Home;