import Nav from "./nav";

function Footer() {
	return (
		<footer className="footer">
			<div className="contenedor contenido">
				<Nav />

				<p className="copyright">
					Todos los derechos reservados {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
