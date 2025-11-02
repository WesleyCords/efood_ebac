import { FieldContainer } from './styled'

type FieldProps = {
  label: string
  type: string
}

const Field = ({ label, type }: FieldProps) => {
  return (
    <FieldContainer>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </FieldContainer>
  )
}

export default Field
