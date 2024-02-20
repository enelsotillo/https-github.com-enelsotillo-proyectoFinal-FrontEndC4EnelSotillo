import { RouterProvider } from "react-router-dom";
import DefaulLayout from "./layouts/DefaulLayouts.jsx";
import Rutas from './Routes.jsx';
import { AuthProvider } from "./context/AuthContext.jsx";
// or less ideally

const App = () => {

  return (
    <AuthProvider>
      <DefaulLayout>
        <RouterProvider router={Rutas} />
      </DefaulLayout>
    </AuthProvider>
  )
}

export default App;
