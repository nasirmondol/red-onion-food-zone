import React, { useEffect, useState } from 'react';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunches, setLunches] = useState([]);
    console.log(lunches)

    useEffect(()=>{
       fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunches(data))
    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <div className='breakfast-container w-75 mt-5'>
                {
                    lunches.map(lunch => <SingleLunch
                    key={lunch.id}
                    lunch={lunch}
                    ></SingleLunch>)
                }
            </div>
        </div>
    );
};

export default Lunch;