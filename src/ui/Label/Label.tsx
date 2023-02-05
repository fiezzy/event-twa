import { FCWithChildren } from 'types/app'
import * as S from './style'

type LabelProps = {
  className?: string
}

export const Label: FCWithChildren<LabelProps> = (props) => {
  const { children, className } = props

  return <S.Label className={className}>{children}</S.Label>
}
