import React from 'react';

const Service = ({ service }) => {
    const { serviceName, picture, shortDescription } = service;
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 items-center justify-between p-3 bg-base-100 shadow-xl hover:shadow-2xl rounded-sm">
            <div className='p-4 md:p-2'>
                <figure>
                    <img className='max-w-xs w-full' src={picture} alt="Movie" />
                </figure>
            </div>
            <div className="p-2">
                <h2 className="text-3xl">{serviceName}</h2>
                <p className='break-words'>{shortDescription}</p>
                <div className=" my-2 justify-end">
                    <button className="btn btn-sm ">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;