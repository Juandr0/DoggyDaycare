import './navbar.css';
import '../App'
import Welcome from '../ComponentScreens/Welcome';
import Catalogue from '../ComponentScreens/Catalogue';
import Information from '../ComponentScreens/Information';
import React, { useState } from "react";
import pawImage from '../paw.png'
import { Link } from "react-router-dom"


const Navbar = (props) => {

    const [togglerState, setTogglerState] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");


    //Toggle animation
    const navToggle = () => {
        if (window.innerWidth > 728) {
            return
        }
        togglerState === 'nav_menu' || togglerState === 'nav_menu nav_transition'
            ? setTogglerState('nav_menu navToggler_active nav_transition')
            : setTogglerState("nav_menu");

        toggleIcon === 'nav_toggler'
            ? setToggleIcon('nav_toggler toggle')
            : setToggleIcon('nav_toggler');
    }



    return (
        <nav className='nav'>
            <div className='nav_container'>
                <a href="/#" className='nav_brandname' >Doggy Daycare  <img src={pawImage} className='pawImage' alt="paw image" style={{ width: '23px', color: 'white' }} /></a>
              
                <ul className={togglerState}>
                    <li className="nav_items">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav_items">
                        <Link to="/dogs">Our dogs</Link>
                    </li>

                    <li className="nav_items">
                        <Link to="/Information">About us</Link>
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
