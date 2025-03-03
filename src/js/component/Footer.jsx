import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-white text-dark-purple">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">Babostore</h5>
                        <p>Las mejores suscripciones de streaming a precios accesibles.</p>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">Categorías</h6>
                        <ul className="list-unstyled">
                            <li>Inicio</li>
                            <li>Suscripciones</li>
                            <li>Ofertas</li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">Ayuda</h6>
                        <ul className="list-unstyled">
                            <li>Contacto</li>
                            <li>Preguntas Frecuentes</li>
                            <li>Términos y Condiciones</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2025 Babostore. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
