import { useEffect, useState } from "react";
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Imagen from "../public/img/triste.png";

export function meta() {
    return [
        { title: "GuitarLA - Remix" },
        { charset: "utf-8" },
        { viewport: "width=device-width, initial-scale=1" },
    ];
}

export function links() {
    return [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
        },
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
        },
        { rel: "stylesheet", href: styles },
    ];
}

export default function App() {
    const carritoLS =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("carrito")) ?? []
            : [];
    const [carrito, setCarrito] = useState(carritoLS);

    useEffect(() => {
        if (carrito.length > 0) {
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }
    }, [carrito]);

    function agregarCarrito(guitarra) {
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            setCarrito(
                carrito.map((guitarraState) => {
                    if (guitarraState.id === guitarra.id) {
                        guitarraState.cantidad = guitarra.cantidad;
                    }
                    return guitarraState;
                })
            );
        } else {
            setCarrito([...carrito, guitarra]);
        }
    }

    function actualizarCantidad(guitarra) {
        setCarrito(
            carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            })
        );
    }

    function eliminarGuitarra(id) {
        setCarrito(carrito.filter((guitarraState) => guitarraState.id !== id));
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra,
                }}
            />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

/* Manejo de errores */
export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    return (
        <Document>
            <div className="contenedor min-h-smartphone contenido-error">
                <img src={Imagen} alt="Imagen error" />
                <h1>Algo salió mal</h1>
                {Object.entries(error).length !== 0 ? (
                    <>
                        <p>
                            {error?.status
                                ? error?.status
                                : "Ya estamos trabajando para arreglarlo"}
                        </p>
                        <p>{error?.statusText && error?.statusText}</p>
                        <Link to={-1}>Volver</Link>
                    </>
                ) : (
                    <>
                        <p>Ya estamos trabajando para arreglarlo</p>
                        <Link to={-1}>Volver</Link>
                    </>
                )}
            </div>
        </Document>
    );
}
