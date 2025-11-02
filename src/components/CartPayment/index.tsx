import Tag from '../Button'
import Field from '../Field'
import { CartAddressContainer } from './styled'

type CartPaymentProps = {
  next: (step: number) => void
}

const CartPayment = ({ next }: CartPaymentProps) => {
  return (
    <CartAddressContainer>
      <h2>
        Pagamento - <span>R$ 100,00</span>
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
