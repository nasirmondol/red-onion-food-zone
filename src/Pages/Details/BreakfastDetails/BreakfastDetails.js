import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const BreakfastDetails = () => {
    const { breakfastId } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/breakfast.json')
            .then(res => res.json())
            .then(data => {
                const detail = data.find(detail => detail.id == breakfastId)
                setDetails(detail)
            })
    }, [])

    return (
        <div>
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