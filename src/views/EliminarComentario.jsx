
import { Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteComentario = () => {
    
    const [error, setError] = useState(false);
    const [DesHabilitaButton, SetDesHabilitaButton] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const Volver = () =>{
        navigate('/');
    }

    const Eliminar = async () =>{
        setError(false);
        SetDesHabilitaButton(true);

        try {
            const url = 'http://localhost:3000/coment/';
            const datos = {id: id}
            const respuesta = await axios.delete(url, {data: { id: id } } );
            console.log(respuesta.data);
            if (respuesta.status === 200) {
    
              return navigate('/');
    
            } else {
                console.log(error);
              setError({ error: 'Error inesperado' })
            }
    
        } catch (error) {
            console.log(error);
          setError({ error: 'Ocurrio un error interno de servidor '})
        }
    
        SetDesHabilitaButton(false);
    
      
    }

    return (
        <Card.Body>
            <Alert variant="warning">
                Esta seguro que desea Eliminar la publicacion con el ID {id}?
            </Alert>
            <ButtonGroup style={{ maxWidth: '30px' }}>
                <Button variant="primary" onClick={Volver} disabled={DesHabilitaButton}>Volver</Button>
                <Button variant="danger" onClick={Eliminar} disabled={DesHabilitaButton}>Confirmar Eliminar </Button>
            </ButtonGroup>

        </Card.Body>
    )
}

export default DeleteComentario;
