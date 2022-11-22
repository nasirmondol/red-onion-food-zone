import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const BreakfastDetails = () => {
    const { breakfastId } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/product/${breakfastId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className=''>
            <img className='mt-2' height={120} src={details.img} alt="" />
            <h2>{details.name}</h2>
            <p>{details.description}</p>
            <Button >
                <Link className='text-light text-bold' style={{textDecoration: 'none'}} to='/'>Back to home</Link>
            </Button>
        </div>
    );
};

export default BreakfastDetails;