import { traerComentarioDePostPorId, traerComentarioPorId } from '../utils/llamando.js'
import { Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const FormularioEditarComentario = (props) => {
  const { id, usuario, token } = props;
  const url = 'http://localhost:3000/coment/';
  const navigate = useNavigate();

  const [comentario, setComentario] = useState('');
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  const cambiarComentario = (e) => {
    setComentario(e.target.value);
  }

  /* Validar formulario*/
  const validarComentario = () => {
    let misErrores = {};
    if (comentario.length === 0) {
      misErrores.comentario = 'Debes introducir un comentario';
    }
    setErrores(misErrores);
    return Object.entries(misErrores).length === 0;
  };

  const verificarDatos = async () => {
    if (!validarComentario()) return;
    setEnviando(true);

    const respuesta = await enviarComentario();

    setEnviando(false);

    if (respuesta.status === 200) {
      return navigate(-1);
    } else {
      setErrores({ error: respuesta.error });
    }
  };

  /* Preparar datos para enviar al BackEnd*/
  const enviarComentario = async () => {
    const headers = {
      token: token,
    };
    const datos = {
      id: id,
      comentario: comentario,
    };
  
    try {
      const respuesta = await axios.put(url, datos, { headers: headers });
      console.log(respuesta)
      return respuesta;
    } catch (error) {
      console.error();
      return { ok: false, error: 'Ocurrió un error interno del servidor' };
    }
  };

  const TraerDatosComentario = async () => {
    if (usuario) {
      const respuesta = await traerComentarioPorId(id);
      if (respuesta) {
        if (usuario.id !== respuesta.autor) {
          return navigate('/');
        }
        setComentario(respuesta.comentario);
      } else {
        setErrores({ error: 'Error inesperado al obtener el comentario' });
      }
    } else {
      return navigate('/');
    }
  };

  useEffect(() => {
    TraerDatosComentario();
  }, []);

  /* Formulario de*/
  /*
  return (


    <Form>
      <Card>
        <Card.Body>
          <Card.Title>Agregar Comentario</Card.Title>
          <FloatingLabel controlId="comentario" label="Ingrese un Comentario">
            <Form.Control
              onInput={cambiarComentario} defaultValue={comentario}
              value={miComent}
             
              as="textarea"
              placeholder="Ingrese un comentario"
              style={{ height: '100px' }}
            />
             {
                errores.comentario && (<span style={{ color: "red" }}>{errores.comentario}</span>)
              }
          </FloatingLabel>
          <br />
          <Button variant="primary" onClick={verificarDatos} disabled={DesHabilitaButton}>Agregar</Button>
        </Card.Body>
      </Card>

              
    </Form>
  );
  */
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Comentario</Card.Title>
        {enviando && <p>Enviando...</p>}
        {errores.error && <p style={{ color: 'red' }}>{errores.error}</p>}
        <FloatingLabel id="comentarioEditado" label="Ingrese un Comentario">
          <Form.Control
            id="comentarioEditado"
            defaultValue={comentario}
            onInput={cambiarComentario}
            as="textarea"
            style={{ height: '100px' }}
          />
          {errores.comentario && (
            <span style={{ color: 'red' }}>{errores.comentario}</span>
          )}
        </FloatingLabel>
        <br />
        <Button variant="primary" onClick={verificarDatos}>
          Guardar Cambios
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FormularioEditarComentario;