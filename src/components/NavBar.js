import typo from "./images/typoBlanco.png"

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul>
            <li><a href="index.html"><img src={typo} alt="typo"/></a></li>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
    );
};

export default NavBar;