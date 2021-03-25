import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-background'>
           <ul className='nav-links'>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/character'>Characters</Link>
            </ul> 
        </div>
    );
};

export default Header;