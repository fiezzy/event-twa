import { FC, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title } from 'ui'
import { Ticket } from './components'
import * as S from './style'

export const GuestTickets: FC<BlockProps> = (props) => {
  const { changeActiveBlock, userInfo, changeCurrentUserInfo } = props

  const { sendData, tg } = useTelegram()

  const { t } = useTranslation()

  const ticketsData = useMemo(
    () => [
      {
        title: 'Buisness · $ 100',
        label: t(
          'A visitor can attend the event, communicate with a crypto community'
        ),
        type: 'buisness',
      },
      {
        title: 'VIP · $ 1000',
        label: t(
          'A visitor has all the benefits of a Standard ticket, participate in the charity auction and access to the afterparty.'
        ),
        type: 'vip',
      },
      {
        title: 'C-level · $ 3500',
        label: t(
          'A visitor has all the benefits of a VIP ticket + access to the C-Level area.'
        ),
        type: 'cLevel',
      },
    ],
    [t]
  )

  const handleTicketClick = useCallback(
    (ticket: string) => {
      changeCurrentUserInfo!({ ...userInfo, ticket })
    },
    [changeCurrentUserInfo, userInfo]
  )

  const handlePromoClick = useCallback(() => {
    changeCurrentUserInfo!({ ...userInfo, ticket: 'buisness' })
    changeActiveBlock(BlocksNames.Promo)
  }, [changeActiveBlock, changeCurrentUserInfo, userInfo])

  useEffect(() => {
    if (userInfo && userInfo.ticket) {
      sendData(userInfo)
    }
  }, [sendData, userInfo])

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.Roles)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.Roles)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Choose your ticket')}</Title>
      {userInfo?.eventFormat === 'online' ? (
        <S.TicketsWrapper>
          <Ticket
            label={ticketsData[0].label}
            onClick={() => handleTicketClick(ticketsData[0].type)}
            title={ticketsData[0].title}
          />
        </S.TicketsWrapper>
      ) : (
        <S.TicketsWrapper>
          {ticketsData.map(({ title, label, type }) => (
            <Ticket
              key={title}
              label={label}
              onClick={() => handleTicketClick(type)}
              title={title}
            />
          ))}
        </S.TicketsWrapper>
      )}
      <S.Label onClick={handlePromoClick}>{t('I have a promocode')}</S.Label>
    </S.Wrapper>
  )
}
