import { FC } from 'react'
import MAIN from './assets/main.jpeg'
import * as S from './style'

export const Image: FC = () => {
  return (
    <S.Wrapper>
      <img alt="#" src={MAIN} />
    </S.Wrapper>
  )
}
