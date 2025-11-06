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
  dados: Restaurant | Restaurant[]
}

const Item = ({ dados }: ItemProps) => {
  const dadosArray = Array.isArray(dados) ? dados : [dados]
  const navigate = useNavigate()

  const setTags = (tipo: string, destacado: boolean) => {
    const tags = []
    if (destacado) {
      tags.push('Destaque da semana')
    }
    tags.push(tipo)
    return tags
  }

  if (dadosArray.length === 0) {
    return <p>Carregando...</p>
  }

  return (
    <ItemContainer>
      {dadosArray.map((item) => (
        <div className="key" key={item.id}>
          <img src={item.capa} alt="Prato 1" />
          <Tags>
            {setTags(item.tipo, item.destacado).map((tag) => (
              <Tag variant="primary">{tag}</Tag>
            ))}
          </Tags>
          <Dados>
            <ItemTitle>
              <Title>{item.titulo}</Title>
              <Availation>
                {item.avaliacao}
                <img src={estrela} alt="Avaliacao" />
              </Availation>
            </ItemTitle>
            <Descriprion>{item.descricao}</Descriprion>
            <Tag
              variant="primary"
              evento={() => navigate(`/perfil/${item.id}`)}
            >
              Saiba mais
            </Tag>
          </Dados>
        </div>
      ))}
    </ItemContainer>
  )
}

export default Item
