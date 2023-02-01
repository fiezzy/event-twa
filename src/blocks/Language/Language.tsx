import { FC } from 'react'
import * as S from './style'

export const Language: FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Dubai Crypto Thursday</S.Title>
      <S.Label>Please, select your language</S.Label>
      <S.ButtonsWrapper>
        <S.Button>English</S.Button>
        <S.Button>Russian</S.Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
