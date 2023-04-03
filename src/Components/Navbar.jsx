import './navbar.css';
import '../App'


const Navbar = (props) => {
    return (
        <nav class='nav'>
            <div class='nav_container'>
            <a href="/#" className='nav_brandname'>Doggy Daycare</a>
            <ul className='nav_menu'>
                <li className="nav_items">
                    <a href="/#">Home</a>
                </li>

                <li className="nav_items">
                    <a href="/#"> Our Dogs</a>
                </li>

                <li className="nav_items">
                    <a href="/#">About us</a>
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