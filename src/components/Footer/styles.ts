import styled from 'styled-components'

import collors from '../../styles/variable'

export const FooterContainer = styled.div`
  height: 298px;
  background-color: ${collors.pink};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 125px;
  }
`

export const SocialMedia = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 16px;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`

export const Disclaimer = styled.p`
  width: 540px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: ${collors.pinkHigh};
`
