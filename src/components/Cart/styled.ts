import styled from 'styled-components'

import collors from '../../styles/variable'
import { Button } from '../Button/styled'

export const CartBackground = styled.div<{ view: boolean }>`
  display: ${(props) => (props.view ? 'block' : 'none')};
`

export const CartContainer = styled.div<{ view: boolean }>`
  max-width: 360px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${collors.pinkHigh};
  padding: 32px 8px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.view ? 'translateX(0)' : 'translateX(100%)')};
  color: ${collors.pink};

  ${Button} {
    width: 100%;
    margin-top: 16px;
  }
`
