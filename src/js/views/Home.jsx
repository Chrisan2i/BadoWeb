import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import logo from "../../img/babo-logo.png";

const Home = () => {
    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Babo Logo" className="logo" />
                        <span className="ms-2 fw-bold text-dark">Babostore</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">Suscripciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">Ofertas</Link>
                            </li>
                        </ul>
                        <div>
                            <Link className="btn btn-outline-dark me-2" to="/login">Iniciar Sesión</Link>
                            <Link className="btn btn-dark" to="/register">Registrarse</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Banner */}
            <div className="banner text-center text-white d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="mb-3">La Suscripción Premium más Barata en Babostore</h1>
                    <p className="mb-4">Proporcionando streaming asequible y de alta calidad.</p>
                    <Link to="/register">
                        <button className="btn btn-danger m-2">Empieza Ahora</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-outline-light m-2">Iniciar Sesión</button>
                    </Link>
                </div>
            </div>

            {/* Servicios */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Nuestros Servicios</h2>
                <div className="row justify-content-center">
                    <div className="col-md-2 text-center">
                        <button className="service-btn">
                            <img src="https://static.gamsgocdn.com/image/e0cf45a9e92bc958aff7ba7bfe118df9.webp" alt="SVOD" className="service-icon" />
                            <div className="service-label">SVOD</div>
                        </button>
                    </div>
                    <div className="col-md-2 text-center">
                        <button className="service-btn">
                            <img src="https://static.gamsgocdn.com/image/4fa7dc27c9e2640037fb0a4bc472a1e2.webp" alt="Música" className="service-icon" />
                            <div className="service-label">Música</div>
                        </button>
                    </div>
                    <div className="col-md-2 text-center">
                        <button className="service-btn">
                            <img src="https://static.gamsgocdn.com/image/e0cf45a9e92bc958aff7ba7bfe118df9.webp" alt="AI" className="service-icon" />
                            <div className="service-label">AI</div>
                        </button>
                    </div>
                    <div className="col-md-2 text-center">
                        <button className="service-btn">
                            <img src="https://static.gamsgocdn.com/image/4fa7dc27c9e2640037fb0a4bc472a1e2.webp" alt="Software" className="service-icon" />
                            <div className="service-label">Software</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
