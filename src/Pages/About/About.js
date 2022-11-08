import React, { useEffect, useState } from 'react';
import SingleAbout from '../SingleAbout/SingleAbout';
import './About.css'

// https://i.ibb.co/Yppk1dv/adult-blur-blurred-background-687824.png
// https://i.ibb.co/hYNHCs6/architecture-building-city-2047397.png
// https://i.ibb.co/xhK16WM/chef-cook-food-33614.png

const About = () => {
    const [abouts, setAbouts] = useState([])
    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, [])
    return (
        <div >
            <div className='about-text m-15 w-25'>
                <h2 className=''>Why you choose us?</h2>
                <p><small>We are very seincerly and serious in our responsibility. We work hard with team.</small></p>
            </div>
            <div className='about-container'>
                {
                    abouts.map(about => <SingleAbout
                        key={about.id}
                        about={about}
                    ></SingleAbout>)
                }
            </div>
        </div>
    );
};

export default About;