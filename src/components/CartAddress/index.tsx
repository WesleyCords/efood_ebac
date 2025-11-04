import Tag from '../Button'
import Field from '../Field'
import { CartAddressContainer } from './styled'
import { Row, RowButtons } from '../../styles'

type CartAddressProps = {
  next: (step: number) => void
  form: any
}

const CartAddress = ({ next, form }: CartAddressProps) => {
  return (
    <CartAddressContainer>
      <form>
        <h2>Entrega</h2>
        <Field
          type="text"
          label="Nome"
          nameField="name"
          value={form.values.name}
          change={form.handleChange}
          error={form.touched.name && form.errors.name ? form.errors.name : ''}
          blur={form.handleBlur}
        />
        <Field
          type="text"
          label="Endereço"
          nameField="address"
          value={form.values.address}
          change={form.handleChange}
          error={
            form.touched.address && form.errors.address
              ? form.errors.address
              : ''
          }
          blur={form.handleBlur}
        />
        <Field
          type="text"
          label="Cidade"
          nameField="city"
          value={form.values.city}
          change={form.handleChange}
          error={form.touched.city && form.errors.city ? form.errors.city : ''}
          blur={form.handleBlur}
        />
        <Row>
          <Field
            type="number"
            label="CEP"
            nameField="postalCode"
            value={form.values.postalCode}
            change={form.handleChange}
            error={
              form.touched.postalCode && form.errors.postalCode
                ? form.errors.postalCode
                : ''
            }
            blur={form.handleBlur}
          />
          <Field
            type="number"
            label="Número"
            nameField="numberHouse"
            value={form.values.numberHouse}
            change={form.handleChange}
            error={
              form.touched.numberHouse && form.errors.numberHouse
                ? form.errors.numberHouse
                : ''
            }
            blur={form.handleBlur}
          />
        </Row>
        <Field
          type="text"
          label="Complemento (Opcional)"
          nameField="complement"
          value={form.values.complement}
          change={form.handleChange}
        />
        <RowButtons>
          <Tag
            evento={form.handleSubmit}
            variant="secondary"
            stepBack={() => next(2)}
          >
            Continuar para o pagamento
          </Tag>
          <Tag variant="secondary" stepBack={() => next(0)}>
            Voltar para o carrinho
          </Tag>
        </RowButtons>
      </form>
    </CartAddressContainer>
  )
}

export default CartAddress
