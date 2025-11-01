import * as S from './styles'

import logo from '../../assets/image/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cartSlice'

type HeroProps = {
  view?: boolean
}

const Hero = ({ view }: HeroProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(toggleCart())
  }

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
          <span onClick={openCart}>0 produto(s) no carrinho</span>
        </>
      )}
    </S.HeroContainer>
  )
}

export default Hero
