import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers.js";

function Post({ post }) {
    const { titulo, contenido, url, imagen, publishedAt } = post;

    return (
        <article className="post">
            <img
                width='300'
                height='200'
                className="imagen"
                src={imagen?.data?.attributes?.formats?.small?.url}
                alt={`Imagen blog ${titulo}`}
            />

            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen" key={new Date() * Math.random()}>
                    {contenido.map((texto) => texto?.children[0]?.text)}
                </p>
                <Link className="enlace" to={`/blog/${url}`}>
                    Leer entrada
                </Link>
            </div>
        </article>
    );
}

export default Post;
