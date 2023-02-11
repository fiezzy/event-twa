import { FC } from 'react'
import { Label } from 'ui'
import * as S from './style'

type TicketProps = {
  title: string
  labels: string[]
  onClick: () => void
}

export const Ticket: FC<TicketProps> = (props) => {
  const { title, labels, onClick } = props

  return (
    <S.Wrapper onClick={onClick}>
      <S.Title>{title}</S.Title>
      {labels.map((label) => (
        <Label key={label}>{label}</Label>
      ))}
    </S.Wrapper>
  )
}
