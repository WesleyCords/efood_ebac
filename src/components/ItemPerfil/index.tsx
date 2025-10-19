import Tag from '../Tag'
import { ItemContainer, Description } from './styled'

import pizza from '../../assets/image/pizza.png'

const ItemPerfil = () => {
  return (
    <ItemContainer>
      <img src={pizza} alt="Pizza" />
      <h2>Pizza Marguerita</h2>
      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <Tag variant="secondary">Adicionar ao Carrinho</Tag>
    </ItemContainer>
  )
}

export default ItemPerfil
