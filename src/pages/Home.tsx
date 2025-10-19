import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Products from '../components/Porducts'
import { Container } from '../styles'

const Home = () => {
  return (
    <>
      <Hero view />
      <Container>
        <Products />
      </Container>
      <Footer />
    </>
  )
}

export default Home
