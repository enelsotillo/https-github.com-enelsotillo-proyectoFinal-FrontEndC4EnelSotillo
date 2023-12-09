import { RouterProvider } from "react-router-dom";
import DefaulLayout from "./layouts/DefaulLayouts.jsx";
import  Rutas  from './Routes.jsx';
// or less ideally

const App = () => {
  
  return (
    <DefaulLayout>
      <RouterProvider router={ Rutas } />
    </DefaulLayout>
  )
}

export default App;
