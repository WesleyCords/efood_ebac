import { Details, PresentContainer } from './styled'

type PresentProps = {
  capa: string
  nome: string
  tipo: string
}

const Present = ({ capa, nome, tipo }: PresentProps) => {
  return (
    <PresentContainer>
      <img src={capa} alt="" />
      <Details>
        <h3>{tipo}</h3>
        <h2>{nome}</h2>
      </Details>
    </PresentContainer>
  )
}

export default Present
