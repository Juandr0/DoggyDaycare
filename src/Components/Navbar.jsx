import './navbar.css';
import '../App'
import Welcome from '../ComponentScreens/Welcome';
import Catalogue from '../ComponentScreens/Catalogue';
import Information from '../ComponentScreens/Information';
import React, { useState } from "react";


const Navbar = (props) => {

    const clickHandler = (screenName) => {
        props.screenHandler(screenName);
    }

    return (
        <nav class='nav'>
            <div class='nav_container'>
            <a href="/#" className='nav_brandname' onClick={() => clickHandler('Welcome')}>Doggy Daycare</a>
            <ul className='nav_menu'>
                <li className="nav_items">
                    <a href="/#" onClick={() => clickHandler('Welcome')}>Home</a>
                </li>

                <li className="nav_items">
                    <a href="/#" onClick={() => clickHandler('Catalogue')}>Our Dogs</a>
                </li>

                <li className="nav_items">
                    <a href="/#" onClick={() => clickHandler('Information')}>About us</a>
                </li>
            </ul>

            <div className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
