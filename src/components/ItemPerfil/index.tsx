import Tag from '../Button'
import { ItemContainer, Description } from './styled'
import type { MenuItem } from '../../types'
import refactorDescription from '../../utils/refactorDescription'
import Modal from '../Modal'
import { useState } from 'react'

type ItemPerfilProps = {
  item: MenuItem
}

const ItemPerfil = ({ item }: ItemPerfilProps) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <ItemContainer>
        <img src={item.foto} alt="Pizza" />
        <h2>{item.nome}</h2>
        <Description>{refactorDescription(item.descricao)}</Description>
        <Tag variant="secondary" evento={() => setOpenModal(!openModal)}>
          Mais detalhes
        </Tag>
      </ItemContainer>
      <Modal evento={() => setOpenModal(false)} menu={item} view={openModal} />
    </>
  )
}

export default ItemPerfil
