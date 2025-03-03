import React, { useState } from "react";
import { auth } from "../../firebase";  // <-- Ruta corregida
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado con éxito");
            navigate("/login");
        } catch (err) {
            console.error("Error al registrar usuario:", err.message);
            setError("Error al registrar el usuario.");
        }
    };

    return (
        <div className="container text-center mt-5">
            <h2>Registrarse</h2>
            <form onSubmit={handleRegister} className="bg-light p-4 rounded">
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
                <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    className="form-control mb-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {error && <div className="alert alert-danger">{error}</div>}
                <button className="btn btn-success w-100 mb-2" type="submit">
                    Crear Cuenta
                </button>
            </form>
        </div>
    );
};

export default Register;
