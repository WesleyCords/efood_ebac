import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export const formCheckout = () => {
  const { cartStep: step } = useSelector((state: RootState) => state.cart)

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
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return formSchema
}
