import styled from 'styled-components'

type ProductsContainerProps = {
  gridThree?: boolean
}

export const ProductsContainer = styled.div<ProductsContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => (props.gridThree ? 3 : 2)}, 1fr);
  width: 100%;
  gap: ${(props) => (props.gridThree ? '40px' : '48px 80px')};
`
