import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { usePostCheckoutMutation } from '../services/api'
import { addOrder } from '../store/reducers/cartSlice'
import { useEffect } from 'react'

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
      name:
        step === 1
          ? Yup.string()
              .min(5, 'Mínimo de 5 caracteres')
              .required('Obrigatório')
          : Yup.string(),
      address:
        step === 1 ? Yup.string().min(5).required('Obrigatório') : Yup.string(),
      city: step === 1 ? Yup.string().required('Obrigatório') : Yup.string(),
      postalCode:
        step === 1
          ? Yup.string().min(8).max(10).required('Obrigatório')
          : Yup.string(),
      numberHouse:
        step === 1 ? Yup.string().required('Obrigatório') : Yup.string(),
      complement: Yup.string(),
      cardName:
        step === 2 ? Yup.string().min(5).required('Obrigatório') : Yup.string(),
      cardNumber:
        step === 2
          ? Yup.string().min(16).max(19).required('Obrigatório')
          : Yup.string(),
      cardCode:
        step === 2
          ? Yup.string().min(3).max(3).required('Obrigatório')
          : Yup.string(),
      cardExpiryMonth:
        step === 2
          ? Yup.string().min(2).max(2).required('Obrigatório')
          : Yup.string(),
      cardExpiryYear:
        step === 2
          ? Yup.string().min(2).max(2).required('Obrigatório')
          : Yup.string(),
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
    validateOnMount: true,
  })
  useEffect(() => {
    formSchema.validateForm()
  }, [step])

  return formSchema
}
