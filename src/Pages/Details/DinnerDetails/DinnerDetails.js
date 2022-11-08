import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DinnerDetails = () => {
    const { dinnerId } = useParams();
    const [dinners, setDinners] = useState({})

    useEffect(() => {
        fetch('/dinner.json')
            .then(res => res.json())
            .then(data => {
                const dinnerDetail = data.find(dinnerDetail => dinnerDetail.id == dinnerId)
                setDinners(dinnerDetail)
            })
    }, [])
    return (
        <div>
            <img height={120} src={dinners.img} alt="" />
            <h5>{dinners.name}</h5>
            <p>{dinners.description}</p>
            <Button >
                <Link className='text-light text-bold' style={{ textDecoration: 'none' }} to='/'>Back to home</Link>
            </Button>
        </div>
    );
};

export default DinnerDetails;