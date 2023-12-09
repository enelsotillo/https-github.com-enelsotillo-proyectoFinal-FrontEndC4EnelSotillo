import { RouterProvider } from "react-router-dom";
import  Rutas  from './Routes.jsx';
// or less ideally

const App = () => {
  
  return (
    <>
      <RouterProvider router={ Rutas } />

    </>
  )
}

export default App;
