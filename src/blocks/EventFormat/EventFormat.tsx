import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Label } from 'ui'
import * as S from './style'

export const EventFormat: FC<BlockProps> = (props) => {
  const { changeActiveBlock, changeCurrentUserInfo, userInfo, fromBlock } =
    props

  const { tg } = useTelegram()

  const { t } = useTranslation()

  const handleFormatBtnClick = (format: 'online' | 'offline') => {
    changeCurrentUserInfo!({ ...userInfo, eventFormat: format })
    changeActiveBlock(BlocksNames.Roles)
  }

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(fromBlock!)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(fromBlock!)
      })
    }
  }, [changeActiveBlock, tg, fromBlock])

  return (
    <S.Wrapper>
      <Title>{t('Choose format')}</Title>
      <Label>
        {t(
          'The event can be attended both online and offline at the Opus Tower (RichmanHouse) in Dubai'
        )}
      </Label>
      <S.ButtonsWrapper>
        <S.Button onClick={() => handleFormatBtnClick('offline')}>
          {t('Offline')}
        </S.Button>
        <S.Button onClick={() => handleFormatBtnClick('online')}>
          {t('Online')}
        </S.Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
