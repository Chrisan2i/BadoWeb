import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./js/layout";
import "bootstrap/dist/css/bootstrap.min.css";  // Importa Bootstrap para los estilos

ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,
    document.getElementById("root")
);
