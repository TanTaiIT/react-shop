import { useRoutes } from "react-router-dom"
import Login from "./views/Login"
import Registered from "./views/Registered"
import Home from './views/Home'
import MainLayout from "./layout/MainLayout"
const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    
    {
      path: '/registered',
      element: <Registered />
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])

  return routeElement
}
export default useRouteElement