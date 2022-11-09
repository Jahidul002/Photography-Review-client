import React from 'react';
import quotes1 from '../Utilities/quotes1.jpg'

const DetailsBloGG = () => {
    return (
        <div className='md:grid grid-cols-2 gap-10 mx-10 mb-10 bg-emerald-100 rounded-lg'>
            <div>
                <img className='rounded-lg' src={quotes1} alt="" />
            </div>
            <div className='flex items-center'>
                <p className='font-semibold text-gray-600'>Like all creative ventures, photography requires inspiration. We have compiled 101 inspiration photography quotes to make sure your photographic creativity never runs dry!

                    Photography is more than just a skill or talent; it's a passion that needs constant fulfillment. Whether you are an amateur or a professional photographer, these inspirational photography quotes for photographers would motivate you to find your passion and love for photography. Learn from and get inspired by these famous photography quotes from photographers such as Ansel Adams, Henri Cartier-Bresson, Mark Denman, Ted Grant, Annie Leibovitz, amongst many others.</p>
            </div>
        </div>
    );
};

export default DetailsBloGG;