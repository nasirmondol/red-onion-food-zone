import React, { useEffect, useState } from 'react';
import './Breakfast.css'
import SingleBreakfast from '../SingleBreakfast/SingelBreakfast';


const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <div className='breakfast-container w-75 mt-5'>
                {
                    breakfasts.map(breakfast => <SingleBreakfast
                        key={breakfast._id}
                        breakfast={breakfast}
                    ></SingleBreakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfast;