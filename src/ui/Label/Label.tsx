import { FCWithChildren } from 'types/app'
import * as S from './style'

type LabelProps = {
  className?: string
  onClick?: () => void
}

export const Label: FCWithChildren<LabelProps> = (props) => {
  const { children, className, onClick } = props

  return (
    <S.Label className={className} onClick={onClick}>
      {children}
    </S.Label>
  )
}
