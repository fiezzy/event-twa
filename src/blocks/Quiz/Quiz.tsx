import { FC } from 'react'
import { Input } from 'twa-ui'
import { BlockProps } from 'types/app'
import { Title } from 'ui'
import * as S from './style'

export const Quiz: FC<BlockProps> = () => {
  return (
    <S.Wrapper>
      <Title>Quiz</Title>
      <Input onChange={(value) => console.log(value)} />
      <S.CheckboxWrapper>
        <S.Label>Investment Fund Representative</S.Label>
        <Input onChange={(value) => console.log(value)} type="checkbox" />
      </S.CheckboxWrapper>
      <S.CheckboxWrapper>
        <S.Label>Private Investor</S.Label>
        <Input onChange={(value) => console.log(value)} type="checkbox" />
      </S.CheckboxWrapper>
    </S.Wrapper>
  )
}
