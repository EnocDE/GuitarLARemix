function Curso({ curso }) {
    const { titulo, contenido, imagen } = curso;
    return (
        <section className="curso">
            <style jsx="true">
                {`
                    .curso {
                        background-image: linear-gradient(to right, rgba(0, 0 ,0, .67) 0%, rgba(0,0,0, .7) 50%), url(${imagen?.data?.attributes?.url});
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                `}
            </style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido[0]?.children[0]?.text}</p>
                </div>
            </div>
        </section>
    );
}

export default Curso;
