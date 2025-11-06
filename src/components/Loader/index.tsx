import collors from '../../styles/variable'
import { ContainerLoader } from './styles'

import { PropagateLoader } from 'react-spinners'

const Loader = () => {
  return (
    <ContainerLoader>
      <PropagateLoader color={collors.pinkHigh} />
    </ContainerLoader>
  )
}

export default Loader
