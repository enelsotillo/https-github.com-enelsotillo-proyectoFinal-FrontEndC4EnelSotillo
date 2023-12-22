import { useNavigate, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import FormularioEditar from '../components/FormularioEditar.jsx'


const Editar = () => {
  const { id } = useParams();
  
  return (
    <Card.Body>
     <FormularioEditar id={id}/>
    </Card.Body>
  )
}

export default Editar;
