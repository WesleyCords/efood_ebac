import {
  CartContainer,
  Item,
  TrashIcon,
  List,
  TotalPrice,
  CartBackground,
} from './styled'

import foto from '../../assets/image/pizza.png'
import trash from '../../assets/image/trash.png'
import Tag from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { toggleCart } from '../../store/reducers/cartSlice'

const Cart = () => {
  const { open } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(toggleCart())
  }

  return (
    <>
      <CartBackground view={open} onClick={openCart} className="overlay" />
      <CartContainer view={open}>
        <List>
          <Item>
            <img src={foto} />
            <div>
              <h3>Pizza de Calabresa</h3>
              <p>1x - R$ 35,00</p>
            </div>
            <TrashIcon src={trash} alt="Lixeira" />
          </Item>
          <Item>
            <img src={foto} />
            <div>
              <h3>Pizza de Calabresa</h3>
              <p>1x - R$ 35,00</p>
            </div>
            <TrashIcon src={trash} alt="Lixeira" />
          </Item>
          <Item>
            <img src={foto} />
            <div>
              <h3>Pizza de Calabresa</h3>
              <p>1x - R$ 35,00</p>
            </div>
            <TrashIcon src={trash} alt="Lixeira" />
          </Item>
        </List>
        <TotalPrice>
          price total: <span>R$ 100,00</span>
        </TotalPrice>
        <Tag variant="secondary">Continuar com a entrega</Tag>
      </CartContainer>
    </>
  )
}

export default Cart
