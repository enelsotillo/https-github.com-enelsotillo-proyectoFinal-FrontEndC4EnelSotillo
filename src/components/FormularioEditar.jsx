import { TraeDatosDelUsuarioPorId } from './../utils/llamando.js';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from 'react-bootstrap';




const FormularioEditar = (props) => {
  const { id } = props;
  const url = 'http://localhost:3000/usuario';
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');

  const [DesHabilitaButton, SetDesHabilitaButton] = useState(false);
  const [errores, setErrores] = useState({});

  const cambiarUsuario = (e) => {

    setUsuario(e.target.value);
  }
  const cambiarNombre = (e) => {

    setNombre(e.target.value);
  }
  const cambiarApellido = (e) => {

    setApellido(e.target.value);
  }
  const cambiarPassword = (e) => {

    setPassword(e.target.value);
  }

  /* Validar formulario*/
  const verificarDatos = async () => {
    let misErrores = {};

    if (usuario.length === 0) {
      misErrores.usuario = 'Debe introducir al menos un usuario';
    }
    if (nombre.length === 0) {
      misErrores.nombre = 'Debe introducir al menos un nombre';
    }
    if (apellido.length === 0) {
      misErrores.apellido = 'Debe introducir al menos un Apellido';
    }
    if (password.length === 0) {
      misErrores.password = 'Debe introducir al menos un password';
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

    const datos = {
      id: id,
      usuario: usuario,
      nombre: nombre,
      apellido: apellido,
      password: password,
    }
    try {
      const respuesta = await axios.put(url, datos);

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

    const respuesta = await TraeDatosDelUsuarioPorId(id)
    if (respuesta) {
      setUsuario(datos.usuario);
      setNombre(datos.nombre);
      setApellido(datos.apellido);
      setPassword(datos.password);
    } else {
      setErrores({ error: 'Error inesperado al optener el usuario' })
      SetDesHabilitaButton(true);
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
          Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={cambiarUsuario} defaultValue={usuario} />
          {
            errores.usuario && (<span style={{ color: "red" }}>{errores.usuario}</span>)
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={cambiarNombre} defaultValue={nombre} />
          {
            errores.nombre && (<span style={{ color: "red" }}>{errores.nombre}</span>)
          }
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextApellido">
        <Form.Label column sm="2">
          Apellido
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarApellido} defaultValue={apellido} />
          {
            errores.apellido && (<span style={{ color: "red" }}>{errores.apellido}</span>)
          }
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type='password' onInput={cambiarPassword} defaultValue={password} />
          {
            errores.password && (<span style={{ color: "red" }}>{errores.password}</span>)
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