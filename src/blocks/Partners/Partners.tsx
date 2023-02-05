import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { BlockProps } from 'types/app'
import { Title, Label, Button } from 'ui'
import { partners } from './partnersData'
import * as S from './style'

export const Partners: FC<BlockProps> = (props) => {
  const { changeActiveBlock, changeCurrentUserInfo } = props

  const { t } = useTranslation(['blockPartners'])

  const handleBecomePartnerClick = () => {
    changeCurrentUserInfo!({ role: 'partner' })
    changeActiveBlock('eventFormat')
  }

  return (
    <S.Wrapper>
      <Title>{t('Event Partners')}</Title>
      <S.DetailsWrapper>
        {partners.map((partner) => (
          <Label key={partner}>{partner}</Label>
        ))}
      </S.DetailsWrapper>
      <S.ClickableLable onClick={handleBecomePartnerClick}>
        {t('Become a partner')}
      </S.ClickableLable>
      <Button onClick={() => changeActiveBlock(BlocksNames.EventFormat)}>
        {t('Next')}
      </Button>
    </S.Wrapper>
  )
}
