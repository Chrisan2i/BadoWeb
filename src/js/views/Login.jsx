import React, { useState } from "react";
import { auth } from "../../firebase";  // <-- Ruta corregida
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso");
            navigate("/");
        } catch (err) {
            console.error("Error al iniciar sesión:", err.message);
            setError("Correo o contraseña incorrectos.");
        }
    };

    return (
        <div className="container text-center mt-5">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="bg-light p-4 rounded">
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="alert alert-danger">{error}</div>}
                <button className="btn btn-success w-100 mb-2" type="submit">
                    Entrar
                </button>
                <p className="mt-2">
                    ¿No tienes cuenta?{" "}
                    <Link to="/register">Registrarse</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
