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
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`
