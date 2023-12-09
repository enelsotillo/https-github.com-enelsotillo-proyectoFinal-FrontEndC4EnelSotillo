import { createBrowserRouter } from "react-router-dom";

//vistas
import Inicio from "./views/Inicio.jsx";
const Rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/ingresar",
        element: <div>Logiado!</div>,
    },
    {
        path: "/registrarse",
        element: <div>Registrarse!</div>,
    },
]);

export default Rutas;