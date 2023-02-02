import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { BlockProps } from 'types/app'
import { Title, Label, Button } from 'ui'
import { partners } from './partnersData'
import * as S from './style'

export const Partners: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { t } = useTranslation(['blockPartners'])

  return (
    <S.Wrapper>
      <Title>{t('Event Partners')}</Title>
      <S.DetailsWrapper>
        {partners.map((partner) => (
          <Label>{partner}</Label>
        ))}
      </S.DetailsWrapper>
      <Label>{t('Become a partner')}</Label>
      <Button onClick={() => changeActiveBlock(BlocksNames.EventFormat)}>
        {t('Next')}
      </Button>
    </S.Wrapper>
  )
}
