import * as S from './styles'

import logo from '../../assets/image/logo.svg'

const Hero = () => {
  return (
    <S.HeroContainer>
      <img src={logo} alt="Efood" />
      <S.Title>Viva experiências gastronômicasno conforto da sua casa</S.Title>
    </S.HeroContainer>
  )
}

export default Hero
