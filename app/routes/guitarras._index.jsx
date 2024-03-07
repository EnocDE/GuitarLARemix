import { useLoaderData, Outlet } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listadoGuitarras.jsx";

export function meta() {
    return [
        {title: "GuitarLA - Tienda de guitarras"},
        {description: "Nuestra colección de guitarras"}
    ]
}

export async function loader() {
    const guitarras = await getGuitarras();
    return guitarras;
}

function Tienda() {
    const guitarras = useLoaderData().data;
    return (
            <ListadoGuitarras guitarras={guitarras}/>
    );
}

export default Tienda;
