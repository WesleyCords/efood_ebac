import { useSelector } from 'react-redux'
import Tag from '../Button'
import Field from '../Field'
import { CartAddressContainer } from './styled'
import { Row, RowButtons } from '../../styles'
import type { RootState } from '../../store'
import formatPrace from '../../utils/refactorPrace'
import type { MenuItem } from '../../types'

type CartPaymentProps = {
  next: (step: number) => void
  form: any
}

const CartPayment = ({ next, form }: CartPaymentProps) => {
  const { items } = useSelector((state: RootState) => state.cart)

  const getPraceTotal = (items: MenuItem[]) => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  return (
    <CartAddressContainer>
      <h2>
        Pagamento - <span>{formatPrace(getPraceTotal(items))}</span>
      </h2>
      <Field
        type="text"
        label="Nome no cartão"
        nameField="cardName"
        value={form.values.cardName}
        change={form.handleChange}
        error={
          form.touched.cardName && form.errors.cardName
            ? form.errors.cardName
            : ''
        }
        blur={form.handleBlur}
      />
      <Row>
        <Field
          type="text"
          label="Número do cartão"
          nameField="cardNumber"
          value={form.values.cardNumber}
          change={form.handleChange}
          error={
            form.touched.cardNumber && form.errors.cardNumber
              ? form.errors.cardNumber
              : ''
          }
          blur={form.handleBlur}
        />
        <Field
          maxWidth="87px"
          type="text"
          label="CVV"
          nameField="cardCode"
          value={form.values.cardCode}
          change={form.handleChange}
          error={
            form.touched.cardCode && form.errors.cardCode
              ? form.errors.cardCode
              : ''
          }
          blur={form.handleBlur}
        />
      </Row>
      <Row>
        <Field
          type="text"
          label="Mês de Vencimento"
          nameField="cardExpiryMonth"
          value={form.values.cardExpiryMonth}
          change={form.handleChange}
          error={
            form.touched.cardExpiryMonth && form.errors.cardExpiryMonth
              ? form.errors.cardExpiryMonth
              : ''
          }
          blur={form.handleBlur}
        />
        <Field
          type="text"
          label="Ano de Vencimento"
          nameField="cardExpiryYear"
          value={form.values.cardExpiryYear}
          change={form.handleChange}
          error={
            form.touched.cardExpiryYear && form.errors.cardExpiryYear
              ? form.errors.cardExpiryYear
              : ''
          }
          blur={form.handleBlur}
        />
      </Row>
      <RowButtons>
        <Tag
          variant="secondary"
          stepBack={() => {
            ;(next(3), form.handleSubmit())
          }}
        >
          Finalizar Pagamento
        </Tag>
        <Tag variant="secondary" stepBack={() => next(1)}>
          Voltar para a entrega
        </Tag>
      </RowButtons>
    </CartAddressContainer>
  )
}

export default CartPayment
