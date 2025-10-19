import { useNavigate } from 'react-router-dom'

import estrela from '../../assets/image/estrela.svg'
import {
  Availation,
  Descriprion,
  ItemContainer,
  ItemTitle,
  Title,
  Tags,
  Dados,
} from './styles'
import Tag from '../Button'

type ItemProps = {
  dados: {
    title: string
    description: string
    imageSrc: string
    note: number
    tags: string[]
  }
}

const Item = ({ dados }: ItemProps) => {
  const dadosArray = Array.isArray(dados) ? dados : [dados]
  const navigate = useNavigate()

  return (
    <ItemContainer>
      {dadosArray.map((item, index) => (
        <div className="key" key={index}>
          <img src={item.imageSrc} alt="Prato 1" />
          <Tags>
            {item.tags &&
              item.tags.map((tag: string[], index1: number) => (
                <Tag variant="primary" key={index1}>
                  {tag}
                </Tag>
              ))}
          </Tags>
          <Dados>
            <ItemTitle>
              <Title>{item.title}</Title>
              <Availation>
                {item.note}
                <img src={estrela} alt="Avaliacao" />
              </Availation>
            </ItemTitle>
            <Descriprion>{item.description}</Descriprion>
            <Tag variant="primary" evento={() => navigate('/perfil')}>
              Saiba mais
            </Tag>
          </Dados>
        </div>
      ))}
    </ItemContainer>
  )
}

export default Item
