import { FC } from 'react'
import { BlockProps } from 'types/app'
import { Title, Input, Checkbox } from 'ui'
import * as S from './style'

export const Quiz: FC<BlockProps> = () => {
  return (
    <S.Wrapper>
      <Title>Quiz</Title>
      <Input onChange={(value) => console.log(value)} />
      <S.CheckboxWrapper>
        <S.Label>Investment Fund Representative</S.Label>
        <Checkbox onChange={(value) => console.log(value)} />
      </S.CheckboxWrapper>
      <S.CheckboxWrapper>
        <S.Label>Private Investor</S.Label>
        <Checkbox onChange={(value) => console.log(value)} />
      </S.CheckboxWrapper>
    </S.Wrapper>
  )
}
