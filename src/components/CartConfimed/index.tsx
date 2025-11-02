import Tag from '../Button'

type CartPaymentProps = {
  next: (step: number) => void
}

const CartConfimed = ({ next }: CartPaymentProps) => {
  return (
    <div>
      <h2>Pedido Realizao - 'Order_id'</h2>
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
