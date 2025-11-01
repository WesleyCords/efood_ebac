import { useDispatch } from 'react-redux'
import type { MenuItem } from '../../types'

import formatPrace from '../../utils/refactorPrace'

import Tag from '../Button'

import { ModalBackground, ModalContainer, ModalDescription } from './styled'
import { addItem } from '../../store/reducers/cartSlice'

type ModalProps = {
  menu: MenuItem
  view: boolean
  evento: () => void
}

const Modal = ({ menu, view, evento }: ModalProps) => {
  const dispatch = useDispatch()

  const AddToCart = () => {
    dispatch(addItem(menu))
  }

  return (
    <ModalBackground view={view} onClick={evento}>
      <ModalContainer>
        <img src={menu.foto} />
        <ModalDescription>
          <h2>{menu.nome}</h2>
          <p>{menu.descricao}</p>
          <p>Server: {menu.porcao}</p>
          <Tag evento={AddToCart} variant="secondary">
            Adicionar ao carrinho - {formatPrace(menu.preco)}
          </Tag>
        </ModalDescription>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal
