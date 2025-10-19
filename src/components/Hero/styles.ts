import styled from 'styled-components'

import collors from '../../styles/variable'

import fundoHero from '../../assets/image/fundo.png'

export const HeroContainer = styled.section`
  width: 100%;
  height: 384px;
  padding: 40px 0;
  background-image: url(${fundoHero});
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  img {
    width: 125px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  width: 524px;
  text-align: center;
  color: ${collors.pinkHigh};
`
