import Hero from '../components/Hero'
import Item from '../components/Item'
import Products from '../components/Porducts'
import { Container } from '../styles'
import { useGetRestaurantItemsQuery } from '../services/api'

const Home = () => {
  const { data: itemsHome, isLoading, error } = useGetRestaurantItemsQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data</p>

  return (
    <>
      <Hero view />
      <Container>
        <Products>
          {itemsHome?.map((item, index) => (
            <Item key={index} dados={item} />
          ))}
        </Products>
      </Container>
    </>
  )
}

export default Home
