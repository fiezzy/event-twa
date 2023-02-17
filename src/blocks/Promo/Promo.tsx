import { FC, useCallback, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Button, Title, Input } from 'ui'
import * as S from './style'

export const Promo: FC<BlockProps> = (props) => {
  const { userInfo, changeCurrentUserInfo, changeActiveBlock } = props

  const [typedPromocode, setTypedPromocode] = useState('')

  const { sendData, tg } = useTelegram()

  const { t } = useTranslation()

  const handlePromoChange = useCallback((value: string) => {
    setTypedPromocode(value)
  }, [])

  const handleBtnNextClick = () => {
    changeCurrentUserInfo!({ ...userInfo, promocode: typedPromocode })
  }

  useEffect(() => {
    if (userInfo && userInfo.promocode) {
      sendData(userInfo)
    }
  }, [sendData, userInfo])

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.GuestTickets)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.GuestTickets)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Enter your promo code')}</Title>
      <Input onChange={(e) => handlePromoChange(e.target.value)} />
      <S.BtnsWrapper>
        <Button onClick={handleBtnNextClick}>{t('Next')}</Button>
      </S.BtnsWrapper>
    </S.Wrapper>
  )
}
