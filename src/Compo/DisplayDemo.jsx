import React from 'react';

const DisplayDemo = ({ data }) => {
    console.log(data);
    const { catagory, img, provider } = data
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{catagory}</h2>
                    <p>Clicked by:<span className='text-lg text-emerald-600 font-mono font-bold'>{provider}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDemo;