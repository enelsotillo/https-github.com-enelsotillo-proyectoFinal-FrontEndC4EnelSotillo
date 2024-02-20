import { TraeDatosDePostPorId } from './../utils/llamando.js';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from 'react-bootstrap';

//import { useAuthContext } from '../context/AuthContext.jsx';


const FormularioEditar = (props) => {
  const { id, usuario, token } = props;
  const url = 'http://localhost:3000/post';
  const navigate = useNavigate();
  //const { token } = useAuthContext();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [postFotoURL, setPostFotoURL] = useState('');
  //const [apellido, setApellido] = useState('');
  //const [password, setPassword] = useState('');

  const [DesHabilitaButton, SetDesHabilitaButton] = useState(false);
  const [errores, setErrores] = useState({});

  const cambiarTitulo = (e) => {

    setTitulo(e.target.value);
  }
  const cambiarDescripcion = (e) => {

    setDescripcion(e.target.value);
  }
  const cambiarPostFotoUrl = (e) => {

    setPostFotoURL(e.target.value);
  }


  /* Validar formulario*/
  const verificarDatos = async () => {
    let misErrores = {};

    if (titulo.length === 0) {
      misErrores.titulo = 'Debe introducir al menos un titulo';
    }
    if (descripcion.length === 0) {
      misErrores.descripcion = 'Debe introducir al menos una descripcion';
    }
    if (postFotoURL.length === 0) {
      misErrores.postFotoURL = 'Debe introducir al menos una descripcion';
    }

    setErrores(misErrores);

    if (Object.entries(misErrores).length === 0) {
      SetDesHabilitaButton(true);

      /* enviar datos al BackEnd*/
      await enviarDatos();

    }
  }

  /* Preparar datos para enviar al BackEnd*/
  const enviarDatos = async () => {

    const headers = {
      token: token,
    }

    const datos = {
      id: id,
      titulo: titulo,
      descripcion: descripcion,
      postFotoURL: postFotoURL,

    }
    try {
      const respuesta = await axios.put(url, datos, { headers: headers });

      if (respuesta.status === 200) {

        return navigate('/');

      } else {
        setErrores({ error: 'Error inesperado' })
      }

    } catch (error) {
      setErrores({ error: 'Ocurrio un error interno de servidor ' })
    }

    SetDesHabilitaButton(false);

  }

  const TraerDatos = async () => {
    if (usuario) {
      const respuesta = await TraeDatosDePostPorId(id)
      if (respuesta) {
        if (usuario.id !== respuesta.autor) {
          return navigate('/'); // puede agregar vista de error
        }
        setTitulo(respuesta.titulo);
        setDescripcion(respuesta.descripcion);
        setPostFotoURL(respuesta.postFotoURL);

      } else {
        setErrores({ error: 'Error inesperado al optener la publicacion' })
        SetDesHabilitaButton(true);
      }
    } else {
      return navigate('/');
    }
  }
  useEffect(() => {

    TraerDatos();
  }, [])

  /* Formulario de*/
  return (

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Titulo
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={cambiarTitulo} defaultValue={titulo} />
          {
            errores.titulo && (<span style={{ color: "red" }}>{errores.titulo}</span>)
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre">
        <Form.Label column sm="2">
          Descripción
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={cambiarDescripcion} defaultValue={descripcion} />
          {
            errores.descripcion && (<span style={{ color: "red" }}>{errores.descripcion}</span>)
          }
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre">
        <Form.Label column sm="2">
          Foto Url
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={cambiarPostFotoUrl} defaultValue={postFotoURL} />
          {
            errores.postFotoURL && (<span style={{ color: "red" }}>{errores.postFotoURL}</span>)
          }
        </Col>
      </Form.Group>

      {
        errores.error && (<Alert variant={"warning"}> {errores.error} </Alert>
        )
      }

      <Button variant="primary" onClick={verificarDatos} disabled={DesHabilitaButton}>Enviar</Button>


    </Form>
  );
}

export default FormularioEditar;