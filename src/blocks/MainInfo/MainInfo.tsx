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

  const { t } = useTranslation(['blockMainInfo'])

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
            'The first interactive online crypto event where 5 startups will present their projects'
          )}
        </Label>
        <Label>250 {t('spectators in the hall')}</Label>
        <Label>1000+ {t('people online')}</Label>
        <Label>13 {t('venture funds and investors')}</Label>
      </S.DetailsWrapper>

      <Title>{t('Activities')}</Title>
      <S.DetailsWrapper>
        <Label>
          {t(
            'All guests will spend time in good company, networking and a pleasant banquet with'
          )}
        </Label>
        <Label>
          {t('Catering, Drinks, Binance NFT Gallery for Dubai Guests')}
        </Label>
      </S.DetailsWrapper>
      <S.DetailsWrapper>
        <Button
          onClick={() =>
            changeActiveBlock(BlocksNames.InvestInfo, BlocksNames.MainInfo)
          }
        >
          {t('Next')}
        </Button>
        <Button onClick={() => changeActiveBlock(BlocksNames.EventFormat)}>
          {t('Participate')}
        </Button>
      </S.DetailsWrapper>
    </S.Wrapper>
  )
}
