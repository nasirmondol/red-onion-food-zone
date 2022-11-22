import React from 'react';
import './Banner.css'
import banner from '../../images/banner/bannerbackground.png'

const Banner = () => {
    return (
        <div className='banner m-0'>
           <img className='mb-3' width={1340} src={banner} alt="" /> 
        </div>
    );
};

export default Banner;