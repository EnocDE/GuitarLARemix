import { Link, useLocation } from "@remix-run/react";
import Imagen from "../../public/img/carrito.png"

function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="navegacion">
            <Link className={pathname === "/" ? `activo` : ""} to="/">
                Inicio
            </Link>
            <Link className={pathname === "/blog" ? `activo` : ""} to="/blog">
                Blog
            </Link>
            <Link
                className={pathname === "/nosotros" ? `activo` : ""}
                to="/nosotros">
                Nosotros
            </Link>
            <Link className={pathname === "/guitarras" ? `activo` : ""} to="/guitarras">
                Tienda
            </Link>
            <Link to="/carrito">
                <img src={Imagen} alt="Carrito de compras" />
            </Link>
        </nav>
    );
}

export default Nav;
