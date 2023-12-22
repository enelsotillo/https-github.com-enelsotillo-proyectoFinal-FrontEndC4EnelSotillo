import { createContext, useContext, useState } from "react";
import { guardarDatos, guardarToken, obtenerDatos, obtenerToken, limpiarLocalStorage } from "../utils/login.js";

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [usuario, setUsuario] = useState(null);   

    const login = (datos, token) => {
        guardarDatos(datos);
        guardarToken(token);
        setUsuario(datos);
    }

    const logout = () => {
        limpiarLocalStorage();
        setUsuario(null);

    }

    return (
        <AuthContext.Provider value={{usuario, login, logout}}>
            { children }
        </AuthContext.Provider>

    );
}

export const useAuthContext = () => useContext(AuthContext);