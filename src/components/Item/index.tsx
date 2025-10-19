import prato from '../../assets/image/prato.png'
import estrela from '../../assets/image/estrela.svg'
import {
  Availation,
  Descriprion,
  ItemContainer,
  ItemTitle,
  Title,
  Tags,
} from './styles'
import Tag from '../Tag'

type ItemProps = {
  tags?: string[]
}

const Item = ({ tags }: ItemProps) => {
  return (
    <ItemContainer>
      <img src={prato} alt="Prato 1" />
      <Tags>
        {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </Tags>
      <div>
        <ItemTitle>
          <Title>Prato 1</Title>
          <Availation>
            4.9
            <img src={estrela} alt="Avaliacao" />
          </Availation>
        </ItemTitle>
        <Descriprion>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Descriprion>
        <Tag>Saiba mais</Tag>
      </div>
    </ItemContainer>
  )
}

export default Item
