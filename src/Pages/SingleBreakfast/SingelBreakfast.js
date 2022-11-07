import React from 'react';
import './SingleBreakfast.css'

const SingleBreakfast = ({breakfast}) => {
    const {name, img, description, price} = breakfast;
    return (
        <div className='single-container'>
            <img className='mt-2' height={120} src={img} alt="" />
            <h6 className='mt-2'><small>{name}</small></h6>
            <p className='mt-0'><small>{description}</small></p>
            <p className='mt-0'><small>Price: ${price}</small></p>
        </div>
    );
};

export default SingleBreakfast;