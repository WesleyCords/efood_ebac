import Hero from '../components/Hero'
import ItemPerfil from '../components/ItemPerfil'
import Products from '../components/Porducts'
import Present from '../components/Present'
import { Container } from '../styles'

const Perfil = () => {
  return (
    <>
      <Hero />
      <Present />
      <Container>
        <Products gridThree>
          <ItemPerfil />
          <ItemPerfil />
          <ItemPerfil />
          <ItemPerfil />
          <ItemPerfil />
          <ItemPerfil />
        </Products>
      </Container>
    </>
  )
}

export default Perfil
