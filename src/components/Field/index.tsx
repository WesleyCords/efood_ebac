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
}: FieldProps) => {
  return (
    <FieldContainer maxWidth={maxWidth}>
      <label htmlFor={nameField}>{label}</label>
      <input
        type={type}
        id={nameField}
        name={nameField}
        value={value}
        onBlur={blur}
        onChange={change}
      />
      <small>{error}</small>
    </FieldContainer>
  )
}

export default Field
