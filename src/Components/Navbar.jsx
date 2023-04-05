import './navbar.css';
import '../App'
import React, { useState } from "react";
import pawImage from '../paw.png';
import { Link } from "react-router-dom";


const Navbar = (props) => {

    const [togglerState, setTogglerState] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");


    //Toggle nav-animation
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

                <li>
                    <Link className='nav_brandname' to="/">
                        <span>Doggy Daycare</span>
                        <img src={pawImage} className='pawImage' alt="paw image" style={{ width: '23px', color: 'white' }} />
                    </Link>
                </li>




                <ul className={togglerState}>
                    <li className="nav_items">
                        <Link to="/" onClick={() => { setToggleIcon('nav_toggler'); setTogglerState("nav_menu"); }}>
                        <span>Home</span>
                        </Link>
                    </li>

                    <li className="nav_items">

                        <Link to="/dogs" onClick={() => { setToggleIcon('nav_toggler'); setTogglerState("nav_menu"); }}>
                        <span>The crew</span>
                        </Link>
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
