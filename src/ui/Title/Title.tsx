import { FCWithChildren } from 'types/app'
import * as S from './style'

export const Title: FCWithChildren = (props) => {
  const { children } = props

  return <S.Title>{children}</S.Title>
}
