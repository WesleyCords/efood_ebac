import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  evento?: () => void
  stepBack?: (step: number) => void
  step?: number
}

const Tag = ({ children, variant, evento, stepBack, step }: ButtonProps) => {
  const getFunction = () => {
    if (stepBack) {
      return () => stepBack(step!)
    }
    return evento
  }

  return (
    <Button onClick={getFunction()} variant={variant}>
      {children}
    </Button>
  )
}

export default Tag
