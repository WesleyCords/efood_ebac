import { Disclaimer, FooterContainer, SocialMedia } from './styles'

import logo from '../../assets/image/logo.svg'
import insta from '../../assets/image/instagram.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Efood" />
      <SocialMedia>
        <img src={insta} alt="Instagram da Efood" />
        <img src={facebook} alt="Facebook da Efood" />
        <img src={twitter} alt="Twitter da Efood" />
      </SocialMedia>
      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Disclaimer>
    </FooterContainer>
  )
}

export default Footer
