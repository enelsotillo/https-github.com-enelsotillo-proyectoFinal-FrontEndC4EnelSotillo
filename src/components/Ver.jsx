import { TraeDatosDelUsuarioPorId } from './../utils/llamando.js';

import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';



const Ver = () => {
    const { id } = useParams();

    const [usuario, setUsuario] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');

    const TraerDatos = async () => {

        const respuesta = await TraeDatosDelUsuarioPorId(id)

        if (respuesta) {
            setUsuario(respuesta.usuario);
            setNombre(respuesta.nombre);
            setApellido(respuesta.apellido);
            setPassword(respuesta.password);

        } else {
            console.log('No se encontro un usuario con el id:' + id);
        }
    }

    useEffect(() => {

        TraerDatos();
    }, [])

    return (
        <Card.Body>
            <h2>Foros</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{nombre} {apellido}</Card.Title>
                    <Card.Text>
                        Descripción
                    </Card.Text>
                    <Button variant="primary">Editar</Button>
                </Card.Body>
            </Card>
            <br />
            <Card.Body>
                <Card.Title>comentarios</Card.Title>
                <Card.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>Usuarios</Card.Title>
                            <Card.Text>
                                Esto es un comentario
                            </Card.Text>
                            <Button variant="primary">Editar</Button>
                            <Button variant="danger">Eliminar</Button>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card.Body>
        </Card.Body>
    )
}

export default Ver;