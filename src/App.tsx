import { RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyled } from './styles'
import router from './routes'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyled />
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </>
  )
}

export default App
