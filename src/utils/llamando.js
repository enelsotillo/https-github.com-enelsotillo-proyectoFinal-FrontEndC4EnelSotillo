import axios from "axios";

const url = 'http://localhost:3000/usuario';

export const TraeDatosDelUsuarioPorId = async (id) => {
    const endpoint = url + '/'+ id;

    try {
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }

}

export const TraeDatosDePostPorId = async (id) => {
    const endpoint = 'http://localhost:3000/post' + '/'+ id;

    try {
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const traerComentarioDePostPorId = async (idPost) =>{
    const endpoint = 'http://localhost:3000/coments' + '/'+ idPost;

    try {
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const traerComentarioPorId = async (id) =>{
    const endpoint = 'http://localhost:3000/coment/' + id;

    try {
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}
