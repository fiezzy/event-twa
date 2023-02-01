import { FCWithChildren } from 'types/app'
import * as S from './style'

type ButtonProps = {
  className?: string
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

export const Button: FCWithChildren<ButtonProps> = (props) => {
  const { className, onClick, isDisabled, children } = props

  return (
    <S.Wrapper className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  )
}
