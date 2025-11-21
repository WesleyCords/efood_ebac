import { IMaskInput } from 'react-imask'
import { FieldContainer } from './styled'

type FieldProps = {
  type: string
  maxWidth?: string
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void
  nameField?: string
  label: string
  value?: string
  error?: string
  blur?: (e: React.FocusEvent<HTMLInputElement>) => void
  mask?: string
}

const Field = ({
  type,
  maxWidth,
  change,
  nameField,
  label,
  value,
  error,
  blur,
  mask,
}: FieldProps) => {
  const inputProps = {
    type: type,
    id: nameField,
    name: nameField,
    value: value,
    onBlur: blur,
    onChange: change,
  }

  return (
    <FieldContainer error={error} maxWidth={maxWidth}>
      <label htmlFor={nameField}>{label}</label>
      {mask ? (
        <IMaskInput {...inputProps} mask={mask} />
      ) : (
        <input {...inputProps} />
      )}
    </FieldContainer>
  )
}

export default Field
