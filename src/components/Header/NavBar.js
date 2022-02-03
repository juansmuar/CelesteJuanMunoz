import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul>
            <a><CartWidget /></a>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
    );
};

export default NavBar;