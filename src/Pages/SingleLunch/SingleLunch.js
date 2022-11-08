import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleLunch = ({lunch}) => {
    const navigate = useNavigate()
    const {name, id, img, description, price} = lunch;

    const handleLunch = id =>{
        navigate(`/lunch/${id}`)
    }
    return (
        <div className='single-container'>
            <img className='mt-2' height={120} src={img} alt="" />
            <h6 className='mt-2'><small>{name}</small></h6>
            <p className='mt-0'><small>{description}</small></p>
            <p className='mt-0'><small>Price: ${price}</small></p>
            <Button onClick={() => handleLunch(id)} className='bg-info mb-3'>See details</Button>
        </div>
    );
};

export default SingleLunch;