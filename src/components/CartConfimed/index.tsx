import { useSelector } from 'react-redux'
import Tag from '../Button'
import type { RootState } from '../../store'
import { Loader } from '../../styles'

type CartPaymentProps = {
  next: (step: number) => void
}

const CartConfimed = ({ next }: CartPaymentProps) => {
  const { orderId } = useSelector((state: RootState) => state.cart)

  if (!orderId) {
    return <Loader>Carregando...</Loader>
  }
  return (
    <div>
      <h2>Pedido Realizao - {orderId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido. <br />{' '}
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras. <br /> <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br /> <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Tag variant="secondary" stepBack={() => next(4)}>
        Concluir
      </Tag>
    </div>
  )
}

export default CartConfimed
