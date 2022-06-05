import React from 'react';
import Slider from '../../Slider';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import SimpleSteps from './SimpleSteps';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Services />
            <SimpleSteps />
            <Subscribe/>
            <Footer />
        </div>
    );
};

export default Home;