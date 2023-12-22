import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const TablaDedatos = (props) => {
    const { lista } = props;
    const navigate = useNavigate();
    //metodos
    const Ver = (id) => {
        // console.log('Editado ...' + id);
        navigate("/ver/" + id);
    }
    //metodos
    const Edit = (id) => {
        // console.log('Editado ...' + id);
        navigate("/editar/" + id);
    }
    //metodos
    const Delete = (id) => {
        console.log('Eliminando ...' + id);
        navigate("/eliminar/" + id);
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((item, key) => (
                        <tr key={key}>
                            <td>{(key + 1)}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>
                                <ButtonGroup style={{ maxWidth: '30px' }}>
                                    <Button variant="success" onClick={() => Ver(item._id)}>Ver</Button>
                                    <Button variant="primary" onClick={() => Edit(item._id)}>Edit</Button>
                                    <Button variant="danger" onClick={() => Delete(item._id)}>Delete</Button>

                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    );
}

export default TablaDedatos;