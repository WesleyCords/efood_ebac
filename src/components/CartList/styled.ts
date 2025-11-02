import styled from 'styled-components'

import collors from '../../styles/variable'

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

export const TotalPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 16px 0;

  span {
    float: right;
  }
`

export const EmptyCart = styled.p`
  color: ${collors.pink};
  font-size: 18px;
  text-align: center;
  margin-top: 32px;
`
