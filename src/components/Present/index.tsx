import { Details, PresentContainer } from './styled'

import fundoImage from '../../assets/image/background.png'

const Present = () => {
  return (
    <PresentContainer>
      <img src={fundoImage} alt="" />
      <Details>
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </Details>
    </PresentContainer>
  )
}

export default Present
