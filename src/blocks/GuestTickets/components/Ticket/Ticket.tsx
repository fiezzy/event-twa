import { FC } from 'react'
import { Label } from 'ui'
import * as S from './style'

type TicketProps = {
  title: string
  label: string
  onClick: () => void
}

export const Ticket: FC<TicketProps> = (props) => {
  const { title, label, onClick } = props

  return (
    <S.Wrapper onClick={onClick}>
      <S.Title>{title}</S.Title>
      <Label>{label}</Label>
    </S.Wrapper>
  )
}
