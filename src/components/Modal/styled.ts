import styled from 'styled-components'

import collors from '../../styles/variable'
import { Button } from '../Button/styled'

export const ModalBackground = styled.div<{ view: boolean }>`
  display: ${(props) => (props.view ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  background-color: ${collors.pinkHigh};
  display: flex;
  gap: 32px;
  padding: 24px;
  align-items: center;
  border-radius: 8px;
  color: ${collors.pink};

  img {
    width: 280px;
    height: 280px;
    border-radius: 4px;
    object-fit: cover;
  }
`

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 32px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ${Button} {
    width: fit-content;
    padding: 6px 16px;
    border-radius: 4px;
  }
`
