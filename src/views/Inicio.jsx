import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext.jsx';

//components
import TablaDedatos from '../components/TablaDeDatos.jsx';


const Inicio = () => {
 
  const [lista, setLista] = useState([]);
  
  const { usuario } = useAuthContext();

  const cargarLista = async () => {
    //conexio con  en BackEnd de Express
    const response =  await axios.get('http://localhost:3000/posts');
    if( response.status === 200){

      setLista(response.data);

    }
    
  }

useEffect(() => {
cargarLista();
}, []);

return (
    <Card.Body> 
      {usuario ? ('Bienvenido '+ usuario.nombre+' '+usuario.apellido ) : 'No inicio sesión' }
        < TablaDedatos lista={lista} usuario={usuario} />

    </Card.Body>
  )
}

export default Inicio;
