import Hero from '../components/Hero'
import Item from '../components/Item'
import Products from '../components/Porducts'
import { Container } from '../styles'

import prato1 from '../assets/image/prato.png'
import prato2 from '../assets/image/prato2.png'

const itemsHome = [
  {
    tags: ['Novo', 'Promoção'],
    imageSrc: prato1,
    title: 'Sushi Premium',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.6,
  },
  {
    tags: ['Italiana', 'Promoção'],
    imageSrc: prato2,
    title: 'Massas Artesanais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.5,
  },
  {
    tags: ['Japonesa'],
    imageSrc: prato1,
    title: 'Tempurá Sortida',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.2,
  },
  {
    tags: ['Brasileira', 'Mais pedidos'],
    imageSrc: prato2,
    title: 'Feijoada Completa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.9,
  },
]

const Home = () => {
  return (
    <>
      <Hero view />
      <Container>
        <Products>
          {itemsHome.map((item, index) => (
            <Item key={index} dados={item} />
          ))}
        </Products>
      </Container>
    </>
  )
}

export default Home
