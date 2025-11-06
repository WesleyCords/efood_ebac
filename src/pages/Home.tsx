import Hero from '../components/Hero'
import Item from '../components/Item'
import Products from '../components/Porducts'
import { Container } from '../styles'
import { useGetRestaurantItemsQuery } from '../services/api'
import Loader from '../components/Loader'

const Home = () => {
  const { data: itemsHome, isLoading, error } = useGetRestaurantItemsQuery()

  const returnContent = () => {
    if (isLoading) {
      return <Loader />
    }
    return (
      <Products>
        {itemsHome?.map((item, index) => (
          <Item key={index} dados={item} />
        ))}
      </Products>
    )
  }
  if (error) return <p>Error loading data</p>

  return (
    <>
      <Hero view />
      <Container>{returnContent()}</Container>
    </>
  )
}

export default Home
