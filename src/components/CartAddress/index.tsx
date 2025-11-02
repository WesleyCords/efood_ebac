import Tag from '../Button'
import Field from '../Field'
import { CartAddressContainer } from './styled'

type CartAddressProps = {
  next: (step: number) => void
}

const CartAddress = ({ next }: CartAddressProps) => {
  return (
    <CartAddressContainer>
      <h2>Entrega</h2>
      <Field type="text" label="Nome" />
      <Field type="text" label="Endereço" />
      <Field type="text" label="Cidade" />
      <div className="grid">
        <Field type="number" label="CEP" />
        <Field type="number" label="Número" />
      </div>
      <Field type="text" label="Complemento (Opcional)" />
      <div>
        <Tag variant="secondary" stepBack={() => next(2)}>
          Continuar para o pagamento
        </Tag>
        <Tag variant="secondary" stepBack={() => next(0)}>
          Voltar para o carrinho
        </Tag>
      </div>
    </CartAddressContainer>
  )
}

export default CartAddress
