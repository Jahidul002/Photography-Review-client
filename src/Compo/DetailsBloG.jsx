import React from 'react';
import photo from '../Utilities/quotes2.jpg'
const DetailsBloG = () => {
    return (
        <div className='md:grid grid-cols-2 gap-10 mx-10 mb-10 bg-emerald-100 rounded-lg'>
            <div className='flex items-center'>
                <p className='font-semibold text-gray-600'>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.Typically, a lens is used to focus the light reflected or emitted from objects into a real image on the light-sensitive surface inside a camera during a timed exposure. With an electronic image sensor, this produces an electrical charge at each pixel, which is electronically processed and stored in a digital image file for subsequent display or processing.</p>
            </div>
            <div>
                <img className='rounded-lg' src={photo} alt="" />
            </div>
        </div>
    );
};

export default DetailsBloG;