import formatPrace from '../../utils/refactorPrace'
import { EmptyCart, Item, TrashIcon, List, TotalPrice } from './styled'
import trash from '../../assets/image/trash.png'
import Tag from '../Button'
import type { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { moveToNextStep, removeItem } from '../../store/reducers/cartSlice'

const ItemsList = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const trashItem = (id: number) => {
    dispatch(removeItem(id))
  }

  const totalPrice = items.reduce((acc, item) => acc + item.preco, 0)

  if (items.length === 0) {
    return <EmptyCart>Seu carrinho está vazio</EmptyCart>
  }
  return (
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
        price total: <span>{formatPrace(totalPrice)}</span>
      </TotalPrice>
      <Tag variant="secondary" evento={() => dispatch(moveToNextStep(1))}>
        Continuar com a entrega
      </Tag>
    </>
  )
}

export default ItemsList
