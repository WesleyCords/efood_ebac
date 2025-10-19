import { RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyled } from './styles'
import router from './routes'

function App() {
  return (
    <>
      <GlobalStyled />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
