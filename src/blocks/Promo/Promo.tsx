import { FC, useCallback, useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import { BlocksNames } from 'constants/app'
import { CurrentUserInfoContext } from 'context'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Button, Title, Input } from 'ui'
import * as S from './style'

export const Promo: FC<BlockProps> = (props) => {
  // const { changeActiveBlock } = props

  const [typedPromocode, setTypedPromocode] = useState('')

  const { info, changeCurrentUserInfo } = useContext(CurrentUserInfoContext)

  const { onClose } = useTelegram()

  const { t } = useTranslation('blockPromo')

  const handlePromoChange = useCallback((value: string) => {
    setTypedPromocode(value)
  }, [])

  const handleBtnClick = () => {
    if (!typedPromocode) {
      // changeActiveBlock(BlocksNames.Payment)
      onClose()

      return
    }
    changeCurrentUserInfo({ ...info, promocode: typedPromocode })
    // changeActiveBlock(BlocksNames.Payment)
    onClose()
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
