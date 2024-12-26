
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './App.css'
import ROUTE from './Routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 const myRoutes = createBrowserRouter(ROUTE)

  return (
    <>
   <RouterProvider router={myRoutes}/>
    </>
  )
}

export default App
