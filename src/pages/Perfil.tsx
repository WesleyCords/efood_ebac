import Hero from '../components/Hero'
import ItemPerfil from '../components/ItemPerfil'
import Products from '../components/Porducts'
import Present from '../components/Present'
import { Container } from '../styles'

import pizza from '../assets/image/pizza.png'

const items = [
  {
    title: 'Hambúrguer',
    description:
      'Delicioso hambúrguer artesanal com ingredientes frescos e saborosos.',
    imageSrc: pizza,
  },
  {
    title: 'Pizza',
    description:
      'Pizza italiana tradicional com massa fina e ingredientes de alta qualidade.',
    imageSrc: pizza,
  },
  {
    title: 'Sushi',
    description: 'Seleção de sushi fresco preparado por chefs experientes.',
    imageSrc: pizza,
  },
  {
    title: 'Salada',
    description: 'Salada saudável com vegetais frescos e molho caseiro.',
    imageSrc: pizza,
  },
]

const Perfil = () => {
  return (
    <>
      <Hero />
      <Present />
      <Container>
        <Products gridThree>
          {items.map((item, index) => (
            <ItemPerfil
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </Products>
      </Container>
    </>
  )
}

export default Perfil
