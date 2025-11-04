import styled from 'styled-components'

import collors from '../../styles/variable'

import fundoHero from '../../assets/image/fundo.png'

type StyledProps = {
  view?: boolean
}

export const HeroContainer = styled.section<StyledProps>`
  width: 100%;
  height: ${(props) => (props.view ? '383px' : '186px')};
  padding: 40px 0;
  background-image: url(${fundoHero});
  display: flex;
  justify-content: ${(props) =>
    props.view ? 'space-between' : 'space-evenly'};
  align-items: center;
  flex-direction: ${(props) => (props.view ? 'column' : 'row')};
  color: ${collors.pinkHigh};
  font-size: 18px;
  font-weight: 500;

  img {
    width: 125px;
  }

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const HeroPrimary = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  width: 524px;
  text-align: center;
  line-height: 42px;
`
