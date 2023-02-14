import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Label, Button } from 'ui'
import { partners } from './partnersData'
import * as S from './style'

export const Partners: FC<BlockProps> = (props) => {
  const { changeActiveBlock, changeCurrentUserInfo } = props

  const { tg } = useTelegram()

  const { t } = useTranslation()

  const handleBecomePartnerClick = () => {
    changeCurrentUserInfo!({ role: 'partner' })
    changeActiveBlock('eventFormat')
  }

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.InvestInfo)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.InvestInfo)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Event Partners')}</Title>
      <S.DetailsWrapper>
        {partners.map((partner) => (
          <Label key={partner}>{partner}</Label>
        ))}
      </S.DetailsWrapper>
      <Button onClick={handleBecomePartnerClick}>
        {/* {t('Become a partner')} */}
      </Button>
      <Button
        onClick={() =>
          changeActiveBlock(BlocksNames.EventFormat, BlocksNames.Partners)
        }
      >
        {t('Next')}
      </Button>
    </S.Wrapper>
  )
}
