import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase"; // Asegúrate de tener configurado Firebase
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [userLoggedIn, setUserLoggedIn] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserLoggedIn(user ? user : null);
        });
        return () => unsubscribe();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (error) {
            setError("Error al registrar el usuario.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (error) {
            setError("Error al iniciar sesión.");
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/dashboard");
        } catch (error) {
            setError("Error al iniciar sesión con Google.");
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUserLoggedIn(null);
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
                {userLoggedIn ? (
                    <button onClick={handleLogout} className="btn btn-danger">
                        Cerrar Sesión
                    </button>
                ) : (
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia Sesión"}
                    </button>
                )}
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={isLogin ? handleLogin : handleRegister} className="bg-light p-4 rounded">
                {!isLogin && (
                    <>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control mb-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="form-control mb-2"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="form-control mb-2"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </>
                )}
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
                {!isLogin && (
                    <input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        className="form-control mb-2"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                )}
                <button className="btn btn-success w-100 mb-2" type="submit">
                    {isLogin ? "Iniciar Sesión" : "Registrarse"}
                </button>
                <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-100">
                    Iniciar sesión con Google
                </button>
            </form>
        </div>
    );
};

export default Login;
