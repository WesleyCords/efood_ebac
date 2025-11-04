import * as S from './styles'

import logo from '../../assets/image/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/reducers/cartSlice'
import type { RootState } from '../../store'

type HeroProps = {
  view?: boolean
}

const Hero = ({ view }: HeroProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(toggleCart())
  }

  return (
    <S.HeroContainer view={view}>
      {view ? (
        <>
          <img src={logo} alt="Efood" />
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </>
      ) : (
        <S.HeroPrimary>
          <span onClick={() => navigate('/')}>Restaurante</span>
          <img src={logo} alt="Efood" />
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </S.HeroPrimary>
      )}
    </S.HeroContainer>
  )
}

export default Hero
