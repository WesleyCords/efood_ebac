import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { usePostCheckoutMutation } from '../services/api'
import { addOrder } from '../store/reducers/cartSlice'

export const formCheckout = () => {
  const { cartStep: step, items } = useSelector(
    (state: RootState) => state.cart
  )
  const dispatch = useDispatch()
  const [postCheckout] = usePostCheckoutMutation()

  const formSchema = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      numberHouse: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpiryMonth: '',
      cardExpiryYear: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().when((_values, schema) =>
        step === 1
          ? schema
              .min(5, 'O campo deve ter no minimo 5 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      address: Yup.string().when((_values, schema) =>
        step === 1 ? schema.required('Campo obrigatório') : schema
      ),
      city: Yup.string().when((_values, schema) =>
        step === 1 ? schema.required('Campo obrigatório') : schema
      ),
      postalCode: Yup.string().when((_values, schema) =>
        step === 1 ? schema.required('Campo obrigatório') : schema
      ),
      numberHouse: Yup.string().when((_values, schema) =>
        step === 1 ? schema.required('Campo obrigatório') : schema
      ),
      complement: Yup.string(),
      cardName: Yup.string().when((_values, schema) =>
        step === 2 ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((_values, schema) =>
        step === 2 ? schema.required('Campo obrigatório') : schema
      ),
      cardCode: Yup.string().when((_values, schema) =>
        step === 2 ? schema.required('Campo obrigatório') : schema
      ),
      cardExpiryMonth: Yup.string().when((_values, schema) =>
        step === 2 ? schema.required('Campo obrigatório') : schema
      ),
      cardExpiryYear: Yup.string().when((_values, schema) =>
        step === 2 ? schema.required('Campo obrigatório') : schema
      ),
    }),
    onSubmit: async (values) => {
      if (items.length === 0) {
        alert(
          'O carrinho está vazio! Por favor adicione itens antes de finalizar o checkout.'
        )
        return
      }
      try {
        const payload = await postCheckout({
          products: items.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: values.name,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.postalCode,
              complement: values.complement,
              number: Number(values.numberHouse),
            },
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.cardExpiryMonth),
                year: Number(values.cardExpiryYear),
              },
            },
          },
        })
        dispatch(addOrder(payload.data.orderId))
      } catch (error) {
        console.error('Erro ao processar o checkout:', error)
      }
    },
  })

  return formSchema
}
