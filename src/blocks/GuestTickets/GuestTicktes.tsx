import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { BlockProps } from 'types/app'
import { Ticket } from './components'
import * as S from './style'

export const GuestTickets: FC<BlockProps> = (props) => {
  const { changeActiveBlock, userInfo } = props

  const { t } = useTranslation()

  const ticketData = useMemo(
    () => [
      {
        title: 'Standart · $ 100',
        label: t('Admission to the event'),
      },
      {
        title: 'After Party · $ 1000',
        label: t('Admission to the event and the after-event party'),
      },
      {
        title: 'C-level · $ 5000',
        label: t(
          'Admission to the event, party and special C-Level guest area'
        ),
      },
    ],
    [t]
  )

  return (
    <S.Wrapper>
      <S.TicketsWrapper>
        {ticketData.map(({ title, label }) => (
          <Ticket key={title} label={label} onClick={() => {}} title={title} />
        ))}
      </S.TicketsWrapper>
      <S.Label onClick={() => changeActiveBlock(BlocksNames.Promo)}>
        {t('I have a promocode')}
      </S.Label>
    </S.Wrapper>
  )
}
