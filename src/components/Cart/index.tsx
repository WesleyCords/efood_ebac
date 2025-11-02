import { CartContainer, CartBackground } from './styled'
import CartList from '../CartList'
import CartAddress from '../CartAddress'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { moveToNextStep, toggleCart } from '../../store/reducers/cartSlice'
import CartPayment from '../CartPayment'
import CartConfimed from '../CartConfimed'

const Cart = () => {
  const { open, cartStep } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(toggleCart())
  }

  const content = () => {
    if (cartStep === 0) {
      return <CartList />
    }
    if (cartStep === 1) {
      return <CartAddress next={(step) => dispatch(moveToNextStep(step))} />
    }
    if (cartStep === 2) {
      return <CartPayment next={(step) => dispatch(moveToNextStep(step))} />
    }
    if (cartStep === 3) {
      return <CartConfimed next={(step) => dispatch(moveToNextStep(step))} />
    }
    return <p>Erro ao carregar o carrinho</p>
  }

  return (
    <>
      <CartBackground view={open} onClick={openCart} className="overlay" />
      <CartContainer view={open}>{content()}</CartContainer>
    </>
  )
}

export default Cart
