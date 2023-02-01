import { FCWithChildren } from 'types/app'
import * as S from './style'

export const Layout: FCWithChildren = (props) => {
  const { children } = props

  return <S.Wrapper>{children}</S.Wrapper>
}
