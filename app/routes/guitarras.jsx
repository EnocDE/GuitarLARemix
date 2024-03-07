import { Outlet, useOutletContext } from "@remix-run/react";
import styles from "~/styles/guitarras.css";

export function links() {
    return [
        { rel: "stylesheet", href: styles }
    ];
}

function Tienda() {
    return (
        <main className="contenedor min-h-smartphone">
            <Outlet context={useOutletContext()}></Outlet>
        </main>
    );
}

export default Tienda;
