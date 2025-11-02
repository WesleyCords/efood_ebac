import styled from 'styled-components'
import { Button } from '../Button/styled'

export const CartAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 155px);
    gap: 34px;
  }

  ${Button} {
    width: 100%;
    margin-top: 8px;
  }
`
