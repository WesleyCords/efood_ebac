import { useSelector } from 'react-redux'
import Tag from '../Button'
import Field from '../Field'
import { CartAddressContainer } from './styled'
import type { RootState } from '../../store'
import formatPrace from '../../utils/refactorPrace'
import type { MenuItem } from '../../types'

type CartPaymentProps = {
  next: (step: number) => void
}

const CartPayment = ({ next }: CartPaymentProps) => {
  const { items } = useSelector((state: RootState) => state.cart)

  const getPraceTotal = (items: MenuItem[]) => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  return (
    <CartAddressContainer>
      <h2>
        Pagamento - <span>{formatPrace(getPraceTotal(items))}</span>
      </h2>
      <Field type="text" label="Nome no cartão" />
      <div className="different-grid">
        <Field type="number" label="Número do cartão" />
        <Field type="number" label="CVV" />
      </div>
      <div className="grid">
        <Field type="number" label="Mês de Vencimento" />
        <Field type="number" label="Ano de Vencimento" />
      </div>
      <Field type="text" label="Validade" />
      <div className="buttons">
        <Tag variant="secondary" stepBack={() => next(3)}>
          Finalizar Pagamento
        </Tag>
        <Tag variant="secondary" stepBack={() => next(1)}>
          Voltar para a entrega
        </Tag>
      </div>
    </CartAddressContainer>
  )
}

export default CartPayment
