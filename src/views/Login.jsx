
import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { guardarDatos, obtenerDatos, guardarToken, obtenerToken } from '../utils/login.js'; 
import { useAuthContext } from '../context/AuthContext.jsx';

const Login = () => {
  
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [DesHabilitaButton, SetDesHabilitaButton] = useState(false);
  const [errores, setErrores] = useState({});
  
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const cambiarUsuario = (e) => {

    setUsuario(e.target.value);
  }
  const cambiarPassword = (e) => {

    setPassword(e.target.value);
  }


  const verificarDatos = async () => {
    let misErrores = {};

    if (usuario.length === 0) {
      misErrores.usuario = 'Debe introducir al menos un usuario';
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

  const enviarDatos = async () => {
    const url = 'http://localhost:3000/autenticar';
    const datos = {
      usuario: usuario,
      password: password,
    }
    try {
        const respuesta = await axios.post(url, datos);

        if (respuesta.status === 200) {
          //console.log(respuesta.data);
          //return navigate('/');
          const { datos, token } = respuesta.data;

          login(datos, token);
          
         // guardarDatos(datos);
          //guardarToken(token);

          //const datosGuardado = obtenerDatos();
          //const tokenGuardado = obtenerToken();

          //console.log(datosGuardado);
          //console.log(tokenGuardado);
          navigate('/');
        } else {
          setErrores({ error: 'Error inesperado' })
        }

    } catch (error) {
      setErrores({ error: 'Ocurrio un error interno de servidor '})
    }

    SetDesHabilitaButton(false);

  }


  return (
    <Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="Usuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Usuario" onInput={cambiarUsuario} />
          {
            errores.usuario && (
              <Form.Text style={{ color: "red" }}>
                {errores.usuario}
              </Form.Text>
            )
          }

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onInput={cambiarPassword}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          {
            errores.password && (
              <Form.Text style={{ color: "red" }}>
                {errores.password}
              </Form.Text>
            )
          }
        </Form.Group>
        {
          errores.error && (
            <Alert variant='warning'>{errores.error}</Alert>
          )
        }
        <Button variant="primary" onClick={verificarDatos} disabled={DesHabilitaButton}>Ingresar</Button>
      </Form>
    </Card.Body>
  )
}

export default Login;
