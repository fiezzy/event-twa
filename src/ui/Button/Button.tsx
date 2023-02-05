import { FCWithChildren } from 'types/app'
import * as S from './style'

type ButtonProps = {
  className?: string
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  type?: 'submit' | 'button'
  form?: string
}

export const Button: FCWithChildren<ButtonProps> = (props) => {
  const {
    className,
    onClick,
    isDisabled,
    children,
    type = 'button',
    form,
  } = props

  return (
    <S.Wrapper
      className={className}
      disabled={isDisabled}
      form={form}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Wrapper>
  )
}
