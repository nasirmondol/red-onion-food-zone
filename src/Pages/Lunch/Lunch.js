import React, { useEffect, useState } from 'react';
import SingleLunch from '../SingleLunch/SingleLunch';



// https://i.ibb.co/8cG69Js/lunch1.png
// https://i.ibb.co/XpTp5pk/lunch2.png
// https://i.ibb.co/Wgqc5WW/lunch3.png
// https://i.ibb.co/pbLy0db/lunch4.png
// https://i.ibb.co/4fMyZNS/lunch5.png
// https://i.ibb.co/qpbzDq8/lunch6.png


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