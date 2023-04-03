import './navbar.css';
import '../App'
import Welcome from '../ComponentScreens/Welcome';
import Catalogue from '../ComponentScreens/Catalogue';
import Information from '../ComponentScreens/Information';
import React, { useState } from "react";


const Navbar = (props) => {

    const [togglerState, setTogglerState] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");


    //Toggle animation
const navToggle = () => {
    if (window.innerWidth > 728) {
        return
    } 
        togglerState === 'nav_menu'  || togglerState ==='nav_menu nav_transition'
        ? setTogglerState('nav_menu navToggler_active nav_transition') 
        : setTogglerState("nav_menu");

        toggleIcon === 'nav_toggler' 
        ? setToggleIcon('nav_toggler toggle' )
        : setToggleIcon('nav_toggler');
}

    const clickHandler = (screenName) => {
        props.screenHandler(screenName);
    }

    return (
        <nav class='nav'>
            <div class='nav_container'>
                <a href="/#" className='nav_brandname' onClick={() => clickHandler('Welcome')}>Doggy Daycare</a>
                <ul className={togglerState}>
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

                <div className={toggleIcon} onClick={navToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
