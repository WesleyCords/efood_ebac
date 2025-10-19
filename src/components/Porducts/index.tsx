import { ProductsContainer } from './styles'

type ProductsProps = {
  children: React.ReactNode
  gridThree?: boolean
}

const Products = ({ children, gridThree }: ProductsProps) => {
  return <ProductsContainer gridThree={gridThree}>{children}</ProductsContainer>
}

export default Products
