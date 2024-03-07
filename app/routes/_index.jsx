import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "~/components/listadoGuitarras.jsx";
import Curso from "~/components/curso.jsx";
import ListadoBlog from "~/components/listadoBlog.jsx";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesBlog from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";

export function meta() {
    return [
        {title: "GuitarLA - Inicio"},
        {description: "Bienvenido a GuitarLA donde encontraras tus modelos favoritos de guitarras en nuestra tienda, tips y mucho más"}
    ];
}

export function links() {
    return [
        { rel: "stylesheet", href: stylesGuitarras },
        { rel: "stylesheet", href: stylesCurso },
        { rel: "stylesheet", href: stylesBlog },
    ];
}

export async function loader() {
    const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()]);
    return { guitarras: guitarras?.data, posts: posts?.data, curso: curso?.data };
}

function Index() {
    const { guitarras, posts, curso } = useLoaderData();
    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras guitarras={guitarras} />
            </main>

            <Curso curso={curso.attributes}/>

            <section className="contenedor">
                <ListadoBlog posts={posts} />
            </section>
            <section className="bg-separacion"></section>
        </>
    );
}

export default Index;
