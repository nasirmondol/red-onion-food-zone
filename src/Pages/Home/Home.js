import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Header2 from '../Header2/Header2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header2></Header2>
            <Breakfast></Breakfast>
            <About></About>
        </div>
    );
};

export default Home;