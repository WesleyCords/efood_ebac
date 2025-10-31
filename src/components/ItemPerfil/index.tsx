import Tag from '../Button'
import { ItemContainer, Description } from './styled'
import type { MenuItem } from '../../types'
import refactorDescription from '../../utils/refactorDescription'

type ItemPerfilProps = Pick<MenuItem, 'nome' | 'foto' | 'descricao'>

const ItemPerfil = ({ nome, descricao, foto }: ItemPerfilProps) => {
  return (
    <ItemContainer>
      <img src={foto} alt="Pizza" />
      <h2>{nome}</h2>
      <Description>{refactorDescription(descricao)}</Description>
      <Tag variant="secondary">Adicionar ao Carrinho</Tag>
    </ItemContainer>
  )
}

export default ItemPerfil
