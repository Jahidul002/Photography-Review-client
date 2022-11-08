import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddReview = () => {
    const allDAta = useLoaderData()
    console.log(allDAta);
    return (
        <div>
            <h1>data of:{allDAta.catagory}</h1>
        </div>
    );
};

export default AddReview;