import { createBrowserRouter } from "react-router-dom";

//vistas o rutas 
import Inicio from "./views/Inicio.jsx";
import Ingresar from "./views/ingresar.jsx";
const Rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/ingresar",
        element: <Ingresar/>,
    },
    {
        path: "/registrarse",
        element: <div>Registrarse!</div>,
    },
]);

export default Rutas;