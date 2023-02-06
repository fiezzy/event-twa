import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Label, Button } from 'ui'
import * as S from './style'

export const InvestInfo: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { tg } = useTelegram()

  const { t } = useTranslation('blockInvestInfo')

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.MainInfo)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.MainInfo)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Event investment pool')}</Title>
      <Label>113,000 TON ($ 250,000)</Label>
      <Label>
        {t('Startups can receive investment offers right at the event')}!
      </Label>
      <Button onClick={() => changeActiveBlock(BlocksNames.Partners)}>
        {t('Next')}
      </Button>
    </S.Wrapper>
  )
}
