import { useNavigate, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';

import { useAuthContext } from '../context/AuthContext.jsx';

import FormularioEditar from '../components/FormularioEditar.jsx'


const Editar = () => {
  const { token, usuario } = useAuthContext();
  const { id } = useParams();
  
  return (
    <Card.Body>
     <FormularioEditar id={id} token={token} usuario={usuario}/>
    </Card.Body>
  )
}

export default Editar;
