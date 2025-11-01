import type { MenuItem } from '../../types'
import Tag from '../Button'
import { ModalBackground, ModalContainer, ModalDescription } from './styled'

type ModalProps = {
  menu: MenuItem
  view: boolean
  evento: () => void
}

const Modal = ({ menu, view, evento }: ModalProps) => {
  return (
    <ModalBackground view={view} onClick={evento}>
      <ModalContainer>
        <img src={menu.foto} />
        <ModalDescription>
          <h2>{menu.nome}</h2>
          <p>{menu.descricao}</p>
          <p>Server: {menu.porcao}</p>
          <Tag variant="secondary">Adicionar ao carrinho - {menu.preco}</Tag>
        </ModalDescription>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal
