import styled from 'styled-components'

import collors from '../../styles/variable'

export const ItemContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid ${collors.pinkHigh};
  color: ${collors.pinkHigh};
  font-weight: 700;
  position: relative;

  img {
    width: 100%;
    height: 217px;
  }

  div {
    padding: 0 8px 8px 8px;
  }
`

export const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Availation = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descriprion = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 20px;
`

export const Tags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`
