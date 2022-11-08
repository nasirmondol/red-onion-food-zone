import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const LunchDetails = () => {
    const { lunchId } = useParams()
    const [ lunches, setLunches ] = useState({});

    useEffect(() => {
        fetch('/lunch.json')
            .then(res => res.json())
            .then(data => {
                const lunchDetail = data.find(lunchDetail => (lunchDetail.id == lunchId))
                setLunches(lunchDetail)
            })
    }, [])
    return (
        <div>
            <img height={120} src={lunches.img} alt="" />
            <h2>{lunches.name}</h2>
            <p>{lunches.description}</p>
            <Button >
                <Link className='text-light text-bold' style={{textDecoration: 'none'}} to='/'>Back to home</Link>
            </Button>
        </div>
    );
};

export default LunchDetails;