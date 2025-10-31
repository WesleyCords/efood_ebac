import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/perfil/:id',
    element: <Perfil />,
  },
])

export default router
