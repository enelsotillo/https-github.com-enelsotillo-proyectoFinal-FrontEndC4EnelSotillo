import { useNavigate, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';

import { useAuthContext } from '../context/AuthContext.jsx';

import FormularioEditarComentario from "../components/FormularioEditarComentario.jsx";


const EditarCometario = () => {
  const { token, usuario } = useAuthContext();
  const { id } = useParams();
  
  return (
    <Card.Body>
     <FormularioEditarComentario id={id} token={token} usuario={usuario}/>
    </Card.Body>
  )
}

export default EditarCometario;
