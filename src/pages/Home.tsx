import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Item from '../components/Item'
import Products from '../components/Porducts'
import { Container } from '../styles'

const Home = () => {
  const [itemsHome, setItemsHome] = useState([])
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => {
        setItemsHome(data)
      })
  }, [])

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
