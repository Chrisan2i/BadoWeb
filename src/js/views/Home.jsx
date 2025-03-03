import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Bienvenido a la Tienda de Streaming</h1>
            <p className="mb-4">Accede a los mejores servicios de streaming a precios increíbles.</p>
            <div>
                <Link to="/login">
                    <button className="btn btn-primary m-2">Iniciar Sesión</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-success m-2">Registrarse</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
