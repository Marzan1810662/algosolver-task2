import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="hero h-[400px] mb-16" style={{backgroundImage: "url(https://img.freepik.com/free-vector/cloud-computing-storage-technology-background-digital-data-services-innovation-concept_42421-1087.jpg?w=1380&h=100)"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">Subscribe to get regular updates!</h1>
                        <div className='flex flex-col md:flex-row md:justify-center'>
                            <input className='md:w-3/5 p-2' type="email" placeholder='someone@mail.com'/>
                            <button className="w-1/2 md:w-auto btn md:rounded-none mx-auto md:mx-0">Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;