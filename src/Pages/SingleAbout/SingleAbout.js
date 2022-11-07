import React from 'react';
import './SingleAbout.css'
import icon1 from '../../images/icons/Group 1133.png'
import icon2 from '../../images/icons/Group 204.png'
import icon3 from '../../images/icons/Group 245.png'

const SingleAbout = ({about}) => {
    const {name, img, description} = about;
    return (
        <div className='about'>
            <img width={250} src={img} alt="" />
            <h6 className='mt-2'> <img width={30}  src={icon3} alt="" /> {name}</h6>
            <p><small>{description}</small></p>
        </div>
    );
};

export default SingleAbout;