import Tag from '../Button'
import { ItemContainer, Description } from './styled'

type ItemPerfilProps = {
  title: string
  description: string
  imageSrc: string
}

const ItemPerfil = ({ title, description, imageSrc }: ItemPerfilProps) => {
  return (
    <ItemContainer>
      <img src={imageSrc} alt="Pizza" />
      <h2>{title}</h2>
      <Description>{description}</Description>
      <Tag variant="secondary">Adicionar ao Carrinho</Tag>
    </ItemContainer>
  )
}

export default ItemPerfil
