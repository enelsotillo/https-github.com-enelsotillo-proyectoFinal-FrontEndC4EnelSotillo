import { TraeDatosDePostPorId, traerComentarioDePostPorId, traerComentarioPorId } from './../utils/llamando.js';
import axios from 'axios';
import { Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/AuthContext.jsx';

const Ver = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [postFotoURL, setPostFotoURL] = useState('');
    const [coments, setComents] = useState([]);
    const [miComent, setMiComent] = useState('');
    const [editComment, setEditComment] = useState('');
    //const [apellido, setApellido] = useState('');
    //const [password, setPassword] = useState('');
    const { token, usuario } = useAuthContext();

    const TraerDatos = async () => {

        const respuesta = await TraeDatosDePostPorId(id)

        if (respuesta) {
            setTitulo(respuesta.titulo);
            setDescripcion(respuesta.descripcion);
            setPostFotoURL(respuesta.postFotoURL);
            //setPassword(respuesta.password);
            //await traeComents();
        } else {
            console.log('No se encontro la publicacion con el id:' + id);
        }
    }

    const traeComents = async () => {
        const repuesta = await traerComentarioDePostPorId(id);
        if (repuesta) {
            console.log(setComents(repuesta));
        } else {
            console.log('no se pudieron encontrar los comentario de la publicación')
        }
    }
/*
    const editarCommentarioPorId = async (id) => {
          setEditComment(id);

        try {
            const repuestaComentario = await traerComentarioPorId(id);
            console.log('paso 1');
            console.log(id);
            if (repuestaComentario) {
                console.log(repuestaComentario);
                console.log('paso 2');
                const comentario = repuestaComentario.data;
               // console.log(JSON.stringify({comentario})+' mas datos');
               return setEditComment({comentario});
            } else {
                console.error('Error al obtener el comentario');
            }
        } catch (error) {
            console.error('Error durante la solicitud:', error);
        }
    };
*/
    const enviarComent = async () => {

        const url = 'http://localhost:3000/coment';
        const datos = {
            comentario: miComent,
            idPosts: id,
        }
        const headers = {
            token: token,
        }

        try {
            const respuesta = await axios.post(url, datos, { headers: headers });

            if (respuesta.status === 200) {
                setMiComent('');
                await traeComents();

            } else {
                console.log({ error: 'Error inesperado' })
            }

        } catch (error) {
            console.log({ error: 'Ocurrio un error interno de servidor ' })
        }

    }

    // ir la compenente editar comentario
    const EditarComentario = (id) => {
        // console.log('Editado ...' + id);
        navigate("/editarComentario/" + id);
    }
    // ir la compenente editar comentario
    const EliminarComentario = (id) => {
        // console.log('Editado ...' + id);
        navigate("/EliminarComentario/" + id);
    }

    useEffect(() => {
        TraerDatos();
        traeComents();
    }, [])

    const Volver = () => {
        navigate('/');
    }

    return (
        <Card.Body>
            <h2>Foros</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={postFotoURL} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Button variant="primary" onClick={Volver}>Volver</Button>
                </Card.Body>
            </Card>
            <br />
            <Card.Body>
                <Card.Title>Comentarios</Card.Title>
                <Card.Body>
                    {
                        coments.map((comentario, key) => (
                            <div key={key}>
                                <Card>
                                    <Card.Body data-id={comentario._id}>
                                        <Card.Title>Usuarios:{' ' + comentario.autor.nombre + ' ' + comentario.autor.apellido}</Card.Title>
                                        <Card.Text>
                                            {comentario.comentario}
                                        </Card.Text>
                                        <Button variant="primary" onClick={()=> EditarComentario(comentario._id)}>Editar</Button>
                                        <Button variant="danger" onClick={()=> EliminarComentario(comentario._id)}>Eliminar</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title>Agregar Comentario</Card.Title>
                            <FloatingLabel id="comentario" label="Ingrese un Comentario">
                                <Form.Control
                                    onInput={(e) => setMiComent(e.target.value)}
                                    value={miComent}
                                    as="textarea"
                                    placeholder="Ingrese un comentario"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <br />
                            <Button variant="primary" onClick={enviarComent}>Agregar</Button>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card.Body>
        </Card.Body>
    )
}

export default Ver;