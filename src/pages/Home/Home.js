import React from 'react';
import Slider from '../../Slider';
import Footer from './Footer';
import Header from './Header';
import SimpleSteps from './SimpleSteps';

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <SimpleSteps/>
            <Footer/>
        </div>
    );
};

export default Home;