import { Button } from './styled'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  evento?: () => void
  stepBack?: (step: number) => void
  step?: number
  isSubmit?: boolean
  disabled?: boolean
}

const Tag = ({
  children,
  variant,
  evento,
  stepBack,
  step,
  isSubmit = false,
  disabled,
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
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default Tag
