import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Label, Button } from 'ui'
import * as S from './style'

export const MainInfo: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { tg } = useTelegram()

  const { t } = useTranslation()

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.Language)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.Language)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Location')}</Title>
      <Label>{t('date')}</Label>

      <Title>{t('About the event')}</Title>
      <S.DetailsWrapper>
        <Label>
          {t(
            'DCVC* – The event dedicated to startups, investments and venture funds will be held in Dubai on Thursday'
          )}
        </Label>
        <Label>{t('50+ VC')}</Label>
        <Label>{t('100+ Investors')}</Label>
        <Label>{t('12+ Startups')}</Label>
        <Label>{t('120+ Crypto Executives')}</Label>
      </S.DetailsWrapper>

      <S.DetailsWrapper>
        <Button onClick={() => changeActiveBlock(BlocksNames.EventFormat)}>
          {t('Registration')}
        </Button>
      </S.DetailsWrapper>
    </S.Wrapper>
  )
}
