import Hero from '../components/Hero'
import Item from '../components/Item'
import Products from '../components/Porducts'
import { Container } from '../styles'

const Home = () => {
  return (
    <>
      <Hero view />
      <Container>
        <Products>
          <Item tags={['Novo', 'Promoção']} />
          <Item tags={['Novo', 'Promoção']} />
          <Item tags={['Novo', 'Promoção']} />
        </Products>
      </Container>
    </>
  )
}

export default Home
