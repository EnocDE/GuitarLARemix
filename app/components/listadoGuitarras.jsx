import Guitarra from "~/components/guitarra.jsx";

function ListadoGuitarras({ guitarras }) {
    return (
        <>
            <h2 className="heading">Nuestra colección</h2>

            <div className="guitarras-grid">
                {guitarras?.length &&
                    guitarras.map((guitarra) => (
                        <Guitarra
                            key={guitarra?.attributes.url}
                            guitarra={guitarra?.attributes}
                        />
                    ))}
            </div>
        </>
    );
}

export default ListadoGuitarras;
