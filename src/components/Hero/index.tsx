import * as S from './styles'

import logo from '../../assets/image/logo.svg'
import { useNavigate } from 'react-router-dom'

type HeroProps = {
  view?: boolean
}

const Hero = ({ view }: HeroProps) => {
  const navigate = useNavigate()

  return (
    <S.HeroContainer view={view}>
      {view ? (
        <>
          <img src={logo} alt="Efood" />
          <S.Title>
            Viva experiências gastronômicasno conforto da sua casa
          </S.Title>
        </>
      ) : (
        <>
          <span onClick={() => navigate('/')}>Restaurante</span>
          <img src={logo} alt="Efood" />
          <span>0 produto(s) no carrinho</span>
        </>
      )}
    </S.HeroContainer>
  )
}

export default Hero
