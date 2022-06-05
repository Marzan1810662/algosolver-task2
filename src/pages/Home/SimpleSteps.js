import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mail from '../../images/icons/mail.jpg'
import document from '../../images/icons/documents.jpg'
import download from '../../images/icons/download.jpg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const SimpleSteps = () => {
    return (
        <div className=''>
            <div className='py-8 my-2 '>
                <h1 className='text-5xl font-semibold'>3 Simple Steps</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 3xl:gap-8 px-4 lg:px-28 my-6'>
                    <div className=' p-3 flex flex-col justify-center items-center'>
                        <img className='w-44' src={mail} alt="" />
                        <p className='text-3xl'>Step Number 1 </p>
                        <p>Contact Us <FontAwesomeIcon icon={faAngleRight}  className='ml-2 text-sm'  /></p>
                    </div>
                    <div className=' p-3  flex flex-col justify-center items-center'>
                        <img className='w-44' src={document} alt="" />
                        <p className='text-3xl'>Step Number 2</p>
                        <p>tell us your <br /> requirements <FontAwesomeIcon icon={faAngleRight}  className='ml-2 text-sm'  /></p>
                    </div>
                    <div className='hidden'>

                    </div>
                    <div className=' p-3  flex flex-col justify-center items-center'>
                        <img className='w-44' src={download} alt="" />
                        <p className='text-3xl'>Step Number 3 </p>
                        <p>Get your website <FontAwesomeIcon icon={faAngleRight}  className='ml-2 text-sm'  /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleSteps;