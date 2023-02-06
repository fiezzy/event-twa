import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Button, Label, Title } from 'ui'
import { rolesData } from './rolesData'
import * as S from './style'
import { Price, Role } from './types'

export const Roles: FC<BlockProps> = (props) => {
  const { changeActiveBlock, changeCurrentUserInfo, userInfo } = props

  const { tg } = useTelegram()

  const { t } = useTranslation('blockRoles')

  const handleRoleClick = (role: Role, price: Price) => {
    changeCurrentUserInfo!({ ...userInfo, role })

    switch (role) {
      case 'Guest':
        changeActiveBlock(BlocksNames.Promo)
        break
      case 'Company':
      case 'Startup':
        changeActiveBlock(BlocksNames.StartupForm)
        break
      case 'Private investor':
      case 'Private fund':
        changeActiveBlock(BlocksNames.VcForm)
        break
    }
  }

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.EventFormat)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.EventFormat)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Title>{t('Choose a role')}</Title>
      <Label>{t('At the event you can be as following')}</Label>
      <S.ButtonsWrapper>
        {rolesData.map(({ role, price }) => {
          return (
            <Button key={role} onClick={() => handleRoleClick(role, price)}>
              {role}
            </Button>
          )
        })}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
