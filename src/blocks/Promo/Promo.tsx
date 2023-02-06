import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Button, Title, Input } from 'ui'
import * as S from './style'

export const Promo: FC<BlockProps> = (props) => {
  const { userInfo, changeCurrentUserInfo } = props

  const [typedPromocode, setTypedPromocode] = useState('')

  const { sendData } = useTelegram()

  const { t } = useTranslation('blockPromo')

  const handlePromoChange = useCallback((value: string) => {
    setTypedPromocode(value)
  }, [])

  const handleBtnClick = () => {
    if (!typedPromocode) {
      sendData(userInfo!)

      return
    }

    changeCurrentUserInfo!({ ...userInfo, promocode: typedPromocode })
    sendData(userInfo!)
  }

  return (
    <S.Wrapper>
      <Title>{t('Enter your promo code')}</Title>
      <Input onChange={(e) => handlePromoChange(e.target.value)} />
      <S.BtnsWrapper>
        <Button onClick={handleBtnClick}>{t('Skip')}</Button>
        <Button onClick={handleBtnClick}>{t('Next')}</Button>
      </S.BtnsWrapper>
    </S.Wrapper>
  )
}
