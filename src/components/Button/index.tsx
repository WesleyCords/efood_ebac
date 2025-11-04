import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  evento?: () => void
  stepBack?: (step: number) => void
  step?: number
  isSubmit?: boolean
}

const Tag = ({
  children,
  variant,
  evento,
  stepBack,
  step,
  isSubmit = false,
}: ButtonProps) => {
  const getFunction = () => {
    if (stepBack) {
      return () => stepBack(step!)
    }
    return evento
  }

  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      onClick={getFunction()}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default Tag
