// or less ideally
import { Card } from 'react-bootstrap';
import MyNavbar from './../views/Inicio.jsx';

const Inicio = () => {
  
  return (
    <>
      <MyNavbar></MyNavbar>
      
      <div style={{padding: 20}}>
      <Card style={{ backgroundColor: 'yellow' }}>
        <Card>pagina de inicio...</Card>
      </Card>
      </div>
    </>
  )
}

export default Inicio;
