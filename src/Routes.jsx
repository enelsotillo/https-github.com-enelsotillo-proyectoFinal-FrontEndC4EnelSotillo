import { createBrowserRouter } from "react-router-dom";

//vistas o rutas 
import Inicio from "./views/Inicio.jsx";
import RegistrarUsuario from "./views/RegistrarUsuario.jsx";
import Editar from "./views/Editar.jsx";
import Eliminar from "./views/Eliminar.jsx"
import Ver from "./components/Ver.jsx";
import Login from "./views/Login.jsx";
import CrearPost from "./views/CrearPost.jsx";
import EditarCometario from "./views/EditarComentario.jsx";
import EliminarComentario from "./views/EliminarComentario.jsx";

const Rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/crear",
        element: <CrearPost/>,
    },
    {
        path: "/register",
        element: <RegistrarUsuario/>,
    },
    {
        path: "/editar/:id",
        element: <Editar/>,
    },
    {
        path: "/editarComentario/:id",
        element: <EditarCometario/>,
    },
    {
        path: "/eliminar/:id",
        element: <Eliminar />,
    },
    {
        path: "/eliminarComentario/:id",
        element: <EliminarComentario/>,
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