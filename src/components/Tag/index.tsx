import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
}

const Tag = ({ children }: ButtonProps) => <Button>{children}</Button>

export default Tag
