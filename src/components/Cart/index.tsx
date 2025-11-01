import {
  CartContainer,
  Item,
  TrashIcon,
  List,
  TotalPrice,
  CartBackground,
  EmptyCart,
} from './styled'

import trash from '../../assets/image/trash.png'
import Tag from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { removeItem, toggleCart } from '../../store/reducers/cartSlice'
import formatPrace from '../../utils/refactorPrace'

const Cart = () => {
  const { open, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(toggleCart())
  }

  const trashItem = (id: number) => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <CartBackground view={open} onClick={openCart} className="overlay" />
      <CartContainer view={open}>
        {items.length === 0 ? (
          <EmptyCart>Seu carrinho está vazio</EmptyCart>
        ) : (
          <>
            <List>
              {items.length > 0 &&
                items.map((item) => (
                  <Item key={item.id}>
                    <img src={item.foto} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>1x - {formatPrace(item.preco)}</p>
                    </div>
                    <TrashIcon
                      onClick={() => trashItem(item.id)}
                      src={trash}
                      alt="Lixeira"
                    />
                  </Item>
                ))}
            </List>
            <TotalPrice>
              price total: <span>R$ 100,00</span>
            </TotalPrice>
            <Tag variant="secondary">Continuar com a entrega</Tag>
          </>
        )}
      </CartContainer>
    </>
  )
}

export default Cart
