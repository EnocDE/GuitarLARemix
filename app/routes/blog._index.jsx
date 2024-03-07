import { useLoaderData } from "@remix-run/react";
import ListadoBlog from "~/components/listadoBlog.jsx";
import { getPosts } from "~/models/posts.server";

export async function loader() {
    const posts = await getPosts();
    return posts?.data;
}

function Entradas() {
    const posts = useLoaderData();
    return (
        <ListadoBlog posts={posts} />
    )
}

export default Entradas;
