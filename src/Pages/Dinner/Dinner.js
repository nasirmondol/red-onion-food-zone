import React, { useEffect, useState } from 'react';
import SingleDinner from '../SingleDinner/SingleDinner';

// https://i.ibb.co/tq5ZLgd/dinner1.png
// https://i.ibb.co/wzkT7jF/dinner2.png
// https://i.ibb.co/pPBh6Wj/dinner3.png
// https://i.ibb.co/YXr2qYZ/dinner4.png
// https://i.ibb.co/ZYgjGPp/dinner5.png
// https://i.ibb.co/pQY9DL8/dinner6.png


const Dinner = () => {
    const [dinners, setDinner] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            <div className='breakfast-container w-75 mt-5'>
                {
                    dinners.map(dinner => <SingleDinner
                        key={dinner.id}
                        dinner={dinner}
                    ></SingleDinner>)
                }
            </div>
        </div>
    );
};

export default Dinner;