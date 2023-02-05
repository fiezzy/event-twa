import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { BlockProps } from 'types/app'
import { Button, Label, Title } from 'ui'
import { rolesData } from './rolesData'
import { Price } from './rolesData'
import * as S from './style'

export const Roles: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { t } = useTranslation('blockRoles')

  const handleRoleClick = (price: Price) => {
    if (price === 'free') {
      alert('Free !')

      return
    }

    alert(`USD: ${price.usd}, TON: ${price.ton}`)
    changeActiveBlock(BlocksNames.Quiz)
  }

  return (
    <S.Wrapper>
      <Title>{t('Choose a role')}</Title>
      <Label>{t('At the event you can be as following')}</Label>
      <S.ButtonsWrapper>
        {rolesData.map(({ role, price }) => {
          return <Button onClick={() => handleRoleClick(price)}>{role}</Button>
        })}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
