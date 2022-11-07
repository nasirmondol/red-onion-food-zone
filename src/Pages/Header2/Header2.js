import React from 'react';
import './Header2.css'
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div className='header2'>
            <Link to='/breakfast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default Header2;