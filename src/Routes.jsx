import { createBrowserRouter } from "react-router-dom";

//vistas o rutas 
import Inicio from "./views/Inicio.jsx";
import Cargar from "./views/Cargar.jsx";
import Editar from "./views/Editar.jsx";
import Eliminar from "./views/Eliminar.jsx"
import Ver from "./components/Ver.jsx";
import Login from "./views/Login.jsx";

const Rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/cargar",
        element: <Cargar/>,
    },
    {
        path: "/editar/:id",
        element: <Editar/>,
    },
    {
        path: "/eliminar/:id",
        element: <Eliminar />,
    },
    {
        path: "/ver/:id",
        element: <Ver />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default Rutas;