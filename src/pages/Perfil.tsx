import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ItemPerfil from '../components/ItemPerfil'
import Products from '../components/Porducts'
import Present from '../components/Present'
import { Container } from '../styles'
import { useParams } from 'react-router-dom'
import type { Restaurant } from '../types'

const Perfil = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data)
        console.log(data)
      })
  }, [id])

  if (!restaurant) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Hero />
      <Present
        tipo={restaurant.tipo}
        nome={restaurant.titulo}
        capa={restaurant.capa}
      />
      <Container>
        <Products gridThree>
          {restaurant?.cardapio.map((item) => (
            <ItemPerfil
              key={item.id}
              nome={item.nome}
              foto={item.foto}
              descricao={item.descricao}
            />
          ))}
        </Products>
      </Container>
    </>
  )
}

export default Perfil
