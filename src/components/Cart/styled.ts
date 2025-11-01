import styled from 'styled-components'

import collors from '../../styles/variable'
import { Button } from '../Button/styled'

export const CartBackground = styled.div<{ view: boolean }>`
  display: ${(props) => (props.view ? 'block' : 'none')};
`

export const CartContainer = styled.div<{ view: boolean }>`
  width: 360px;
  height: 100vh;
  background-color: ${collors.pinkHigh};
  padding: 32px 8px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.view ? 'translateX(0)' : 'translateX(100%)')};

  ${Button} {
    width: 100%;
    margin-top: 16px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Item = styled.li`
  background-color: ${collors.pink};
  width: 100%;
  height: 100px;
  color: ${collors.pinkHigh};
  display: flex;
  gap: 16px;
  padding: 8px;
  position: relative;

  & > img:first-child {
    width: 80px;
    height: 80px;
  }

  div {
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`
export const TrashIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const EmptyCart = styled.p`
  color: ${collors.pink};
  font-size: 18px;
  text-align: center;
  margin-top: 32px;
`

export const TotalPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 16px 0;

  span {
    float: right;
  }
`
