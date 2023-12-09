import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar =() => {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Arg Programa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/ingresar">Ingresar</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MyNavbar;