import React from 'react';

const Service = ({ service }) => {
    const { serviceName, picture, shortDescription } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl">
            <div className='w-1/2'>
                <figure>
                    <img className='w-full h-full' src={picture} alt="Movie" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p className='break-words'>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm ">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;