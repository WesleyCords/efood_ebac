import Item from '../Item'
import { ProductsContainer } from './styles'

const tags = ['Novo', 'Promoção']

const Products = () => {
  return (
    <ProductsContainer>
      <Item tags={tags} />
      <Item tags={tags} />
      <Item tags={tags} />
      <Item />
    </ProductsContainer>
  )
}

export default Products
