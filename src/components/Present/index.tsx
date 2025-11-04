import { ContainerDetails, Details, PresentContainer } from './styled'

type PresentProps = {
  capa: string
  nome: string
  tipo: string
}

const Present = ({ capa, nome, tipo }: PresentProps) => {
  return (
    <PresentContainer>
      <img src={capa} alt="" />
      <ContainerDetails>
        <Details>
          <h3>{tipo}</h3>
          <h2>{nome}</h2>
        </Details>
      </ContainerDetails>
    </PresentContainer>
  )
}

export default Present
