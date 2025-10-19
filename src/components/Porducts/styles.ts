import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin: 80px 170px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #eee;
  width: 1024px;
  gap: 48px 80px;

  div {
    background-color: #000;
    height: 298px;
    width: 472px;
  }
`
