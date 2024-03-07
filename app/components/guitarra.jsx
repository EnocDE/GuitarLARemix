import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
    const { nombre, precio, url, descripcion, imagen } = guitarra;

    return (
        <div className="guitarra">
            <img
                width="300"
                height="200"
                src={imagen.data.attributes.formats.medium.url}
                alt={`Imagen guitarra ${nombre}`}
            />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion[0].children[0].text}</p>
                <p className="precio">${precio}</p>
                <Link to={`/guitarras/${url}`} className="enlace">
                    Ver producto
                </Link>
            </div>
        </div>
    );
}

export default Guitarra;
