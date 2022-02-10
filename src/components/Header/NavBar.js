import "./NavBar.css"
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul>
            <a><CartWidget /></a>
            <li><Link to='/' className='Link'>Inicio</Link></li>
            <li><Link to='/Menu' className='Link'>Menu</Link></li>
        </ul>
    </nav>
    );
};

export default NavBar;