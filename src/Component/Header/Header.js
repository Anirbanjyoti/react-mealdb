import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Find The Food you Want</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Meals'>Choose Your Food Package</NavLink>
            </nav>
        </div>
    );
};

export default Header;