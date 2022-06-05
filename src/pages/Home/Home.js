import React from 'react';
import Slider from '../../Slider';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import SimpleSteps from './SimpleSteps';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Services />
            <SimpleSteps />
            <Footer />
        </div>
    );
};

export default Home;