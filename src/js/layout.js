import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";  // <-- Importa Register

const Layout = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Tienda de Streaming</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />  {/* <-- Ruta para Registro */}
            </Routes>
        </div>
    );
};

export default Layout;
