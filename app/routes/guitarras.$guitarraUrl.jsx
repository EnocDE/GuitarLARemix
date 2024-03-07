import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export function meta({ data }) {
    const guitarraNombre = data.data[0]?.attributes.nombre;

    return [
        { title: `GuitarLA - ${guitarraNombre}` },
        {
            descripcion: `Guitarras, venta de guitarras, guitarra ${guitarraNombre}`,
        },
    ];
}

export async function loader({ params }) {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if (guitarra.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Guitarra no encontrada.",
        });
    }

    return guitarra;
}

function Guitarras() {
    const {agregarCarrito} = useOutletContext();
    const [cantidad, setCantidad] = useState(0);
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra?.data[0]?.attributes;

    function handleSubmit(e) {
        e.preventDefault();
        if (cantidad < 1) {
            alert("Debes seleccionar una cantidad");
            return;
        }

        const guitarraSeleccionada = {
            id: guitarra?.data[0]?.id,
            imagen: imagen?.data?.attributes?.url,
            nombre,
            precio,
            cantidad,
        };
        
        agregarCarrito(guitarraSeleccionada);
    }

    return (
        <div className="guitarra">
            <img
                width="300"
                height="200"
                src={imagen?.data?.attributes?.url}
                alt={`Imagen de la guitarra ${nombre}`}
                className="Imagen"
            />
            <div className="contenido-guitarra">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion.map(texto => (
                  texto.children[0].text === '' ? "\n\n" : texto.children[0].text
                ))}</p>
                <p className="precio">${precio}</p>

                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select
                        id="cantidad"
                        onChange={(e) => setCantidad(+e.target.value)}>
                        <option value="0">-- Selecciona --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
    );
}

export default Guitarras;
