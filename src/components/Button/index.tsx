import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  evento?: () => void
}

const Tag = ({ children, variant, evento }: ButtonProps) => (
  <Button onClick={evento} variant={variant}>
    {children}
  </Button>
)

export default Tag
