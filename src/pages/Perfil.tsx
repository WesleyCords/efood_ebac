import Hero from '../components/Hero'
import ItemPerfil from '../components/ItemPerfil'
import Products from '../components/Porducts'
import Present from '../components/Present'
import { Container } from '../styles'
import { useParams } from 'react-router-dom'
import { useGetMenuItemsByIdQuery } from '../services/api'
import Loader from '../components/Loader'

const Perfil = () => {
  const { id } = useParams() as { id: string }
  const { data: menu, error, isLoading } = useGetMenuItemsByIdQuery(id)

  if (error) {
    return <p>Erro ao carregar os dados.</p>
  }

  if (menu) {
    if (isLoading) {
      return (
        <>
          <Hero />
          <Loader />
        </>
      )
    }
    return (
      <>
        <Hero />
        <Present tipo={menu.tipo} nome={menu.titulo} capa={menu.capa} />
        <Container>
          <Products gridThree>
            {menu.cardapio.map((item) => (
              <ItemPerfil key={item.id} item={item} />
            ))}
          </Products>
        </Container>
      </>
    )
  }
}

export default Perfil
