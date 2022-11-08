import React from 'react';
import './SingleAbout.css'
import icon1 from '../../images/icons/Group 1133.png'
import icon2 from '../../images/icons/Group 204.png'
import icon3 from '../../images/icons/Group 245.png'
import { Link } from 'react-router-dom';

const SingleAbout = ({about}) => {
    const {name, img, description} = about;
    return (
        <div className='about'>
            <img width={300} src={img} alt="" />
            <h6 className='mt-2'> <img width={30}  src={icon3} alt="" /> {name}</h6>
            <p><small className='mb-0'>{description}</small></p>
            <Link className='text-left mt-0' style={{ textDecoration: 'none' }}>See more</Link>
        </div>
    );
};

export default SingleAbout;