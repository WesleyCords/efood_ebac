import styled from 'styled-components'

import collors from '../../styles/variable'

export const ItemContainer = styled.div`
  background-color: ${collors.pinkHigh};
  color: ${collors.pink};
  border-radius: 6px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  h2 {
    font-size: 16px;
  }

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 6px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
  min-height: 132px;
`
