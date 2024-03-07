import { Link } from "@remix-run/react";
import Logo from "../../public/img/logo.svg"
import Nav from "./Nav";

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">

                <Link className="logo" to='/'>
                    <img className="logo" src={Logo} alt="Imagen logo" />
                </Link>

                <Nav />
            </div>
        </header>
    )
}

export default Header;
