import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const FormularioIngresar =() => {

    const [estado, cambiarEstado] = useState(0);
    const AumentarEstado = () =>{
        cambiarEstado(estado + 1);
    }
    const RestarEstado = () =>{
        cambiarEstado(estado - 1);
    }

  return (
    <>
     contador:{ estado}
    <br/>

    <button onClick={AumentarEstado}>+</button>
    <button onClick={RestarEstado}>-</button>

    </>
    /*
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="primary">Ingresar</Button>
    </Form> */
  );
}

export default FormularioIngresar;