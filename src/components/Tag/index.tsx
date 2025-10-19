import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
}

const Tag = ({ children, variant }: ButtonProps) => (
  <Button variant={variant}>{children}</Button>
)

export default Tag
