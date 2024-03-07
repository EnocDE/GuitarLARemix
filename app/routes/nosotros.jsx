import Imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
    return [
        { title: "GuitarLA - Nosotros" },
        { description: "Venta de guitarras, blog de música" },
    ];
}

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "preload", href: Imagen, as: "image" },
    ];
}

function Nosotros() {
    return (
        <main className="contenedor nosotros min-h-smartphone">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={Imagen} alt="Imagen nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <span className="green-text">
                            Rem possimus consequatur adipisci excepturi odit
                            temporibus
                        </span>{" "}
                        recusandae voluptatem animi, dolores numquam nihil eum
                        vitae dolore, similique veritatis beatae a, et nam ex
                        praesentium?{" "}
                        <span className="yellow-text">
                            Adipisci inventore consequuntur officia error nobis
                            totam dignissimos, ipsum fugiat illum
                            exercitationem, vel est debitis aliquam
                        </span>{" "}
                        temporibus fuga?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores, quae! Maiores{" "}
                        <span className="red-text">nisi fugit fugiat</span>{" "}
                        similique ipsam asperiores perspiciatis unde blanditiis
                        quis praesentium recusandae, iure dolor.{" "}
                        <span className="pink-text">
                            Voluptatem libero veritatis repellendus laudantium!
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Nosotros;
