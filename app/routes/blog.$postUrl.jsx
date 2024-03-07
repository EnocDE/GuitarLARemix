import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers.js";

export function meta({ data }) {
    const { titulo } = data;
    return [
        { title: `GuitarLA - ${titulo}` },
        { description: `Articulo, Entrada, Blog, Guitarras, ${titulo}` },
    ];
}

export async function loader({ params }) {
    console.log(params);
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if (post.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Entrada no encontrada.",
        });
    }

    return post.data[0].attributes;
}

function Post() {
    const post = useLoaderData();
    const { titulo, contenido, publishedAt, imagen } = post;

    return (
        <article className="contenedor post min-h-smartphone">
            <h1>{titulo}</h1>
            <img
                width='300'
                height='200'
                className="imagen"
                src={imagen?.data?.attributes?.url}
                alt={`Imagen blog ${titulo}`}
            />

            <div className="contenido">
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto" key={new Date() * Math.random()}>
                    {contenido.map((texto, index) => {
                        if (texto?.children[0]?.text === "") {
                            return `\n\n`;
                        } else if (
                            (texto?.children[0]?.text).includes("ac")
                        ) {
                            const textoResaltado = texto?.children[0]?.text.replace( /\b(ac)\b/gi, "<span class='red-text'>$1</span>" );
                            return (<span key={index} dangerouslySetInnerHTML={{__html: textoResaltado,}}/>
                            );
                        } else {
                            return texto?.children[0]?.text;
                        }
                    })}
                </p>
            </div>
        </article>
    );
}

export default Post;
