import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop interval='6000' transitionTime="4000" showThumbs={false}>
            <div className='hero w-full h-[50vh] lg:h-[100vh]' style={
                {
                    backgroundImage: `url(https://img.freepik.com/free-photo/web-development-application-design-coding-programming-concept_73903-462.jpg?size=626&ext=jpg&ga=GA1.2.1836613906.1639417936)`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <h1 className="mb-5 md: text-5xl md:text-8xl font-bold">Algosoft</h1>
                        <p className="mb-5 text bold">For next generation websites! </p>
                        <button className="btn btn-ghost">Learn More</button>
                    </div>
                </div>
            </div>
            <div className='hero w-full h-[50vh] lg:h-[100vh]' style={
                {
                    backgroundImage: `url(https://img.freepik.com/free-photo/ui-ux-concept_416743-17.jpg?w=900)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-5xl font-bold">You Dream It, We Help Your Dream Become True</h1>
                        <p className="mb-5">If you are looking for best website design and development you are at the right place. We are just one click away from building youre dream website. Click below to get started </p>
                        <button className="btn md:btn-wide btn-ghost">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='hero w-full h-[50vh] lg:h-[100vh]' style={
                {
                    backgroundImage: `url(https://img.freepik.com/free-photo/futuristic-robot-artificial-intelligence-concept_31965-5169.jpg?w=996)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Algosoft is website design and development organization. We create customised website as per your requirements to help you visualize your dream.</p>
                        <button className="btn md:btn-wide">Learn More</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;