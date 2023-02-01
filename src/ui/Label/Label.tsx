import { FCWithChildren } from 'types/app'
import * as S from './style'

export const Label: FCWithChildren = (props) => {
  const { children } = props

  return <S.Label>{children}</S.Label>
}
