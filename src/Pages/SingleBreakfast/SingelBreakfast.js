import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleBreakfast.css';

const SingleBreakfast = ({ breakfast }) => {
    const { name, id, img, description, price } = breakfast;
    const navigate = useNavigate();

    const handleDetails =  id =>{
        navigate(`/breakfast/${id}`)
    }
    return (
        <div className='single-container justify-content-center'>
            <img className='mt-2' height={120} src={img} alt="" />
            <h6 className='text-center mt-2 d-flex justify-content-center'><small>{name}</small></h6>
            <p className='text-center mt-0'><small>{description}</small></p>
            <p className='text-center mt-0'><small>Price: ${price}</small></p>
            <Button onClick={() => handleDetails(id)} className='bg-info mb-3'>See details</Button>
        </div>
    );
};

export default SingleBreakfast;