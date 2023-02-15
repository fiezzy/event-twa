import { FC, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title } from 'ui'
import { Ticket } from './components'
import * as S from './style'

//test

export const GuestTickets: FC<BlockProps> = (props) => {
  const { changeActiveBlock, userInfo, changeCurrentUserInfo } = props

  const { sendData, tg } = useTelegram()

  const { t } = useTranslation()

  const ticketsData = useMemo(
    () => [
      {
        title: `Business · $ ${userInfo?.eventFormat === 'online' ? 25 : 100}`,
        labels:
          userInfo?.eventFormat === 'online'
            ? [t('Live Stream'), t('Chat'), t('Recording')]
            : [
                t('Offline visiting in Dubai'),
                t('High-quality networking'),
                t('NFT Gallery'),
                t('Startup performance'),
                t('Community Chat'),
              ],
        type: 'business',
      },
      {
        title: 'VIP · $ 1000',
        labels: [
          t(
            'Business + AfterParty in a secret location with -Dubai C level VC and organizers'
          ),
        ],
        type: 'vip',
      },
      {
        title: 'C-level · $ 3500',
        labels: [
          t(
            'Business + AfterParty + Private Lounge on the 11th floor with VC funds, TOP C level Crypto Community Dubai and event organizers'
          ),
          t('High-quality networking'),
          t('Separate chat room'),
        ],
        type: 'cLevel',
      },
    ],
    [t, userInfo]
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
            labels={ticketsData[0].labels || []}
            onClick={() => handleTicketClick(ticketsData[0].type)}
            title={ticketsData[0].title}
          />
        </S.TicketsWrapper>
      ) : (
        <S.TicketsWrapper>
          {ticketsData.map(({ title, labels, type }) => (
            <Ticket
              key={title}
              labels={labels || []}
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
