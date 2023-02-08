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

  const { t } = useTranslation()

  const handleRoleClick = (role: Role, price: Price) => {
    changeCurrentUserInfo!({ ...userInfo, role })

    switch (role) {
      case 'Guest':
        changeActiveBlock(BlocksNames.GuestTickets)
        break
      case 'Company':
        changeActiveBlock(BlocksNames.StartupForm, BlocksNames.Company)
        break
      case 'Startup':
        changeActiveBlock(BlocksNames.StartupForm, BlocksNames.StartupForm)
        break
      case 'Investor':
      case 'VC':
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
              {t(role as any)}
            </Button>
          )
        })}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
