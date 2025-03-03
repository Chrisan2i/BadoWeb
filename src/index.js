import React from "react";
import ReactDOM from "react-dom/client";  // <-- Importa desde react-dom/client
import { BrowserRouter } from "react-router-dom";
import Layout from "./js/layout";
import "bootstrap/dist/css/bootstrap.min.css";  // Importa Bootstrap para los estilos

const root = ReactDOM.createRoot(document.getElementById("root"));  // <-- Usa createRoot en lugar de render
root.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);
