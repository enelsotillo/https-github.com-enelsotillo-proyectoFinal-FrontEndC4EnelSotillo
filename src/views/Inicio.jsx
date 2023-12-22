import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext.jsx';

//components
import TablaDedatos from '../components/TablaDeDatos.jsx';


const Inicio = () => {
 
  const [lista, setLista] = useState([]);
  const authContext = useAuthContext();

  const cargarLista = async () => {
    //conexio con  en BackEnd de Express
    const response =  await axios.get('http://localhost:3000/usuarios');
    if( response.status === 200){

      setLista(response.data);

    }
    
  }

useEffect(() => {
cargarLista();
console.log(authContext);
}, []);

return (
    <Card.Body> pagina de inicio...
      
        < TablaDedatos lista={lista} />

    </Card.Body>
  )
}

export default Inicio;
