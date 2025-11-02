import styled from 'styled-components'
import { Button } from '../Button/styled'

export const CartAddressContainer = styled.div`
  h2 {
    margin-bottom: 16px;
  }

  .different-grid {
    display: grid;
    grid-template-columns: 228px 87px;
    gap: 30px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 155px);
    gap: 34px;
  }

  .buttons {
    margin-top: 24px;
    ${Button} {
      margin-top: 8px;
    }
  }
`
